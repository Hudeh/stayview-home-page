import {
  buildClientConfirmationEmail,
  buildInternalNotificationEmail,
} from "@/lib/email/demo-templates";
import {
  createTransport,
  getFromAddress,
  getMailerConfig,
  getNotifyAddress,
} from "@/lib/email/mailer";
import { parseDemoPayload } from "@/lib/demo/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseDemoPayload(body);

    if (!payload) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    // Honeypot — bots often fill hidden fields
    if (payload.website) {
      return NextResponse.json({ success: true });
    }

    const config = getMailerConfig();
    if (!config) {
      console.error("Demo API: GMAIL_USER / GMAIL_APP_PASSWORD not configured");
      return NextResponse.json(
        {
          success: false,
          message: "Email is not configured yet. Please contact info@hotelproxi.com directly.",
        },
        { status: 503 },
      );
    }

    const transport = createTransport();
    const from = getFromAddress();
    const notifyTo = getNotifyAddress();
    if (!transport || !from || !notifyTo) {
      return NextResponse.json(
        { success: false, message: "Unable to send email. Please try again later." },
        { status: 503 },
      );
    }

    const clientEmail = buildClientConfirmationEmail(payload);
    const internalEmail = buildInternalNotificationEmail(payload);

    await Promise.all([
      transport.sendMail({
        from,
        to: payload.email,
        replyTo: notifyTo,
        subject: clientEmail.subject,
        html: clientEmail.html,
        text: clientEmail.text,
      }),
      transport.sendMail({
        from,
        to: notifyTo,
        replyTo: payload.email,
        subject: internalEmail.subject,
        html: internalEmail.html,
        text: internalEmail.text,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Demo request received. Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Demo API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong sending your request. Please try again or email info@hotelproxi.com.",
      },
      { status: 500 },
    );
  }
}
