import type { DemoRequestPayload } from "@/lib/demo/types";

const BRAND = "#7352c7";
const BRAND_DARK = "#5a3fa0";

function layout(content: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>StayView</title>
</head>
<body style="margin:0;padding:0;background:#f4f2f8;font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#14121f;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f2f8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 32px rgba(115,82,199,0.12);">
          <tr>
            <td style="background:linear-gradient(135deg,${BRAND_DARK},${BRAND});padding:28px 32px;">
              <p style="margin:0;font-size:26px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                Stay<span style="opacity:0.95;">View</span>
              </p>
              <p style="margin:8px 0 0;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.65);">
                By HotelProxi · Hotel PMS
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px 28px;border-top:1px solid #e8e4f0;background:#faf9fc;">
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6b6578;text-align:center;">
                © ${new Date().getFullYear()} StayView · HotelProxi<br />
                <a href="https://stayview.com.ng" style="color:${BRAND};text-decoration:none;">stayview.com.ng</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #f0ecf5;font-size:13px;color:#6b6578;width:38%;vertical-align:top;">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid #f0ecf5;font-size:14px;font-weight:500;color:#14121f;">${escapeHtml(value)}</td>
  </tr>`;
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildClientConfirmationEmail(payload: DemoRequestPayload) {
  const firstName = payload.name.split(/\s+/)[0] || payload.name;
  const content = `
    <h1 style="margin:0 0 12px;font-size:22px;font-weight:700;color:#14121f;">
      Thanks, ${escapeHtml(firstName)} — we received your demo request
    </h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.65;color:#6b6578;">
      Our team at StayView is reviewing your request for
      <strong style="color:#14121f;">${escapeHtml(payload.property)}</strong>.
      A specialist will reach out within <strong style="color:${BRAND};">one business day</strong>
      to schedule your personalised walkthrough.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#faf9fc;border-radius:12px;padding:4px 16px;margin-bottom:24px;">
      ${detailRow("Property", payload.property)}
      ${detailRow("Email", payload.email)}
      ${detailRow("Phone", payload.phone || "—")}
      ${detailRow("Room count", payload.rooms || "Not specified")}
      ${payload.message ? detailRow("Your note", payload.message) : ""}
    </table>
    <p style="margin:0 0 8px;font-size:14px;font-weight:600;color:#14121f;">What to expect</p>
    <ul style="margin:0 0 24px;padding-left:20px;font-size:14px;line-height:1.7;color:#6b6578;">
      <li>30–45 minute live demo tailored to your property</li>
      <li>Front desk, F&B, night audit, or multi-branch — your choice</li>
      <li>Q&amp;A with our product team</li>
    </ul>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#6b6578;">
      Questions before then? Reply to this email or write us at
      <a href="mailto:stayviewpms@gmail.com" style="color:${BRAND};text-decoration:none;font-weight:600;">stayviewpms@gmail.com</a>.
    </p>
  `;

  return {
    subject: "Your StayView demo request is confirmed",
    html: layout(content),
    text: [
      `Hi ${firstName},`,
      "",
      "Thanks for requesting a StayView demo. We received your request and will contact you within one business day.",
      "",
      `Property: ${payload.property}`,
      `Email: ${payload.email}`,
      payload.phone ? `Phone: ${payload.phone}` : "",
      payload.rooms ? `Rooms: ${payload.rooms}` : "",
      payload.message ? `Note: ${payload.message}` : "",
      "",
      "— StayView by HotelProxi",
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

export function buildInternalNotificationEmail(payload: DemoRequestPayload) {
  const content = `
    <h1 style="margin:0 0 8px;font-size:20px;font-weight:700;color:#14121f;">New demo request</h1>
    <p style="margin:0 0 20px;font-size:14px;color:#6b6578;">Submitted from stayview.com.ng/demo</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      ${detailRow("Name", payload.name)}
      ${detailRow("Email", payload.email)}
      ${detailRow("Phone", payload.phone || "—")}
      ${detailRow("Property", payload.property)}
      ${detailRow("Rooms", payload.rooms || "—")}
      ${detailRow("Message", payload.message || "—")}
    </table>
    <p style="margin:24px 0 0;">
      <a href="mailto:${escapeHtml(payload.email)}" style="display:inline-block;background:${BRAND};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:12px 24px;border-radius:999px;">
        Reply to ${escapeHtml(payload.name.split(/\s+/)[0] || "prospect")}
      </a>
    </p>
  `;

  return {
    subject: `[StayView Demo] ${payload.property} — ${payload.name}`,
    html: layout(content),
    text: [
      "New demo request",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "—"}`,
      `Property: ${payload.property}`,
      `Rooms: ${payload.rooms || "—"}`,
      `Message: ${payload.message || "—"}`,
    ].join("\n"),
  };
}
