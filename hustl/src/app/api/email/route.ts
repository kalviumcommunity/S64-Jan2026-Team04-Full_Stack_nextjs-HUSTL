import { NextResponse } from "next/server";
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const { to, subject, message } = await req.json();

    const msg = {
      to,
      from: process.env.SENDGRID_SENDER!,
      subject,
      html: message,
    };

    const response = await sendgrid.send(msg);

    console.log("Email sent:", response[0].headers);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
