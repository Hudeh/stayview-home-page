import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

export function getMailerConfig() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return null;
  }
  return {
    user: GMAIL_USER,
    from: process.env.DEMO_FROM_EMAIL || GMAIL_USER,
    notify: process.env.DEMO_NOTIFY_EMAIL || GMAIL_USER,
  };
}

export function createTransport() {
  const config = getMailerConfig();
  if (!config) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

export function getFromAddress(displayName = "StayView by HotelProxi") {
  const config = getMailerConfig();
  if (!config) return null;
  return `"${displayName}" <${config.from}>`;
}

export function getNotifyAddress() {
  return getMailerConfig()?.notify ?? null;
}
