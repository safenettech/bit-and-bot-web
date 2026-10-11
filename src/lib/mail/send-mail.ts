import nodemailer from "nodemailer"

export interface SendEnquiryMailOptions {
  fullName: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  to?: string
  cc?: string
}

export interface SendMailResult {
  success: boolean
  messageId?: string
  error?: string
}

/**
 * Creates reusable Nodemailer transporter using environment variables.
 */
export function getMailTransporter() {
  const host = process.env.EMAIL_SERVER || "smtp.mailtrap.io"
  const port = Number(process.env.EMAIL_PORT) || 2525
  const pass = process.env.EMAIL_PASSWORD || ""
  // Fall back to EMAIL_CCTO or EMAIL_SENDTO if EMAIL_USER is not explicitly provided
  const user =
    process.env.EMAIL_USER ||
    process.env.EMAIL_USERNAME ||
    process.env.EMAIL_CCTO ||
    process.env.EMAIL_SENDTO ||
    ""

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: user && pass ? { user, pass } : undefined,
  })
}

/**
 * Reusable function to send client enquiry email notifications with TO and CC.
 */
export async function sendEnquiryEmail(
  options: SendEnquiryMailOptions
): Promise<SendMailResult> {
  const to = options.to || process.env.EMAIL_SENDTO || "mskvgames2023@gmail.com"
  const cc = options.cc || process.env.EMAIL_CCTO || "msafvankv786@gmail.com"
  const from =
    process.env.EMAIL_FROM ||
    `"Bit & Bot Notifications" <${process.env.EMAIL_CCTO || "hello@bitandbot.com"}>`

  const transporter = getMailTransporter()

  const safeFullName = options.fullName.trim()
  const safeEmail = options.email.trim()
  const safeCompany = options.company?.trim() || "Not provided"
  const safePhone = options.phone?.trim() || "Not provided"
  const safeSubject = options.subject.trim()
  const safeMessage = options.message.trim()
  const timestamp = new Date().toUTCString()

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0f17; color: #f1f5f9; margin: 0; padding: 24px; }
    .container { max-width: 600px; margin: 0 auto; background: #131b2e; border: 1px solid #1e293b; border-radius: 16px; overflow: hidden; }
    .header { background: linear-gradient(135deg, #0284c7, #2563eb); padding: 28px 32px; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 32px; }
    .field-row { margin-bottom: 16px; border-bottom: 1px solid #1e293b; padding-bottom: 12px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #94a3b8; font-weight: 600; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #ffffff; font-weight: 500; }
    .message-box { background: #0b0f17; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
    .footer { padding: 20px 32px; background: #0b0f17; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🚀 New Client Enquiry Received</h1>
      <p>Submitted via Bit &amp; Bot website contact form</p>
    </div>
    <div class="content">
      <div class="field-row">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${safeFullName}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${safeEmail}" style="color: #38bdf8;">${safeEmail}</a></div>
      </div>
      <div class="field-row">
        <div class="field-label">Company / Organization</div>
        <div class="field-value">${safeCompany}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Phone Number</div>
        <div class="field-value">${safePhone}</div>
      </div>
      <div class="field-row">
        <div class="field-label">Subject</div>
        <div class="field-value">${safeSubject}</div>
      </div>
      <div>
        <div class="field-label">Message Requirements</div>
        <div class="message-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      Sent on ${timestamp} • Target: ${to} • CC: ${cc}
    </div>
  </div>
</body>
</html>
  `.trim()

  const textContent = `
New Client Enquiry Received - Bit & Bot

From: ${safeFullName} <${safeEmail}>
Company: ${safeCompany}
Phone: ${safePhone}
Subject: ${safeSubject}
Date: ${timestamp}

Message:
${safeMessage}

Sent to: ${to}
CC: ${cc}
  `.trim()

  try {
    const info = await transporter.sendMail({
      from,
      to,
      cc,
      replyTo: safeEmail,
      subject: `[Bit & Bot Enquiry] ${safeSubject} - from ${safeFullName}`,
      text: textContent,
      html: htmlContent,
    })

    return {
      success: true,
      messageId: info.messageId,
    }
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Failed to send email"
    console.error("Nodemailer error:", errorMsg)
    return {
      success: false,
      error: errorMsg,
    }
  }
}
