import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const botToken = process.env.BALANZIA_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.BALANZIA_TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ message: "Missing Telegram configuration" });
  }

  try {
    const formattedMessage = `Balanzia support request\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: formattedMessage,
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
