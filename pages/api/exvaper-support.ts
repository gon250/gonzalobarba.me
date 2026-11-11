import type { NextApiRequest, NextApiResponse } from "next";

// Exvaper support form → Telegram. Uses EXVAPER_TELEGRAM_* if set, otherwise the site's TELEGRAM_* bot.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const sanitize = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  const name = sanitize(req.body?.name);
  const email = sanitize(req.body?.email).toLowerCase();
  const message = sanitize(req.body?.message);
  const topic = sanitize(req.body?.topic) || "other";

  // Honeypot: real people never fill this hidden field.
  if (sanitize(req.body?.website)) {
    return res.status(200).json({ success: true });
  }
  if (!name || name.length < 2) {
    return res.status(400).json({ message: "Name is too short" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }
  if (!message || message.length < 10 || message.length > 5000) {
    return res.status(400).json({ message: "Message length is invalid" });
  }

  const botToken = process.env.EXVAPER_TELEGRAM_BOT_TOKEN ?? process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.EXVAPER_TELEGRAM_CHAT_ID ?? process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return res.status(500).json({ message: "Missing Telegram configuration" });
  }

  try {
    const text = [
      "Exvaper support request",
      `Topic: ${topic.slice(0, 40)}`,
      `Name: ${name.slice(0, 120)}`,
      `Email: ${email.slice(0, 200)}`,
      `Received: ${new Date().toISOString()}`,
      "Message:",
      message,
    ].join("\n\n");

    const telegram = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    if (!telegram.ok) {
      return res.status(502).json({ message: "Failed to send Telegram message" });
    }
    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ message: "Unable to process request" });
  }
}
