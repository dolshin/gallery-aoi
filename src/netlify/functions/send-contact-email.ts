import type { Handler, HandlerEvent } from "@netlify/functions";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { MessagesSendResult } from "mailgun.js/definitions";
import { ContactFormType } from "../../lib/zustand/schema/ContactFormSchema";

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY as string,
});

export const handler: Handler = async (event: HandlerEvent) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing request body" }),
      };
    }

    const { name, phoneticName, subject, email, phoneNumber, message } =
      JSON.parse(event.body) as ContactFormType;

    const result: MessagesSendResult = await mg.messages.create(
      process.env.MAILGUN_DOMAIN as string,
      {
        from: process.env.MAILGUN_FROM as string,
        to: [process.env.MAILGUN_TO as string],
        subject: "新しいお問い合わせが届きました",
        text: `名前: ${name}\n フリガナ: ${phoneticName}\n 件名: ${subject}\n メール: ${email}\n 電話番号: ${phoneNumber}\nメッセージ:${message}`,
        html: `
          <h2>新しいお問い合わせ</h2>
          <h3><strong>件名:</strong>${subject}</h3>
          <p><strong>名前:</strong> ${name}</p>
          <p><strong>フリガナ:</strong> ${phoneticName}</p>
          <p><strong>メール:</strong> ${email}</p>
          <p><strong>電話番号:</strong> ${phoneNumber}</p>
          <p><strong>メッセージ:</strong></p>
          <div style="padding:10px; border:1px solid #ccc; background:#f9f9f9;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        `,
      },
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: result.id }),
    };
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error occurred";

    return {
      statusCode: 500,
      body: JSON.stringify({ error: errorMessage }),
    };
  }
};
