import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const sanitize = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  const name = sanitize(req.body?.name);
  const rawEmail = sanitize(req.body?.email);
  const email = rawEmail.toLowerCase();
  const message = sanitize(req.body?.message);

  if (!name || name.length < 2) {
    return res.status(400).json({ message: "Name is too short" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  if (!message || message.length < 10) {
    return res.status(400).json({ message: "Message is too short" });
  }

  const botToken = process.env.BALANZIA_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.BALANZIA_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ message: "Missing Telegram configuration" });
  }

  try {
    const formattedMessage = [
      "Balanzia support request",
      `Name: ${name}`,
      `Email: ${email}`,
      `Received: ${new Date().toISOString()}`,
      "Message:",
      message,
    ].join("\n\n");

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
        disable_web_page_preview: true,
      }),
    });

    if (!telegramResponse.ok) {
      return res.status(502).json({ message: "Failed to send Telegram message" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ message: "Unable to process request" });
  }
}
