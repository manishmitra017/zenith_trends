// Zenith Trends — Quote Request Lambda
// Receives a POST from the frontend, sends a formatted quote email via Amazon SES.
// Runtime: Node.js 20.x (AWS SDK v3 is built-in)

const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const ses = new SESClient({ region: process.env.AWS_REGION || 'ap-southeast-2' });

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
};

exports.handler = async (event) => {
  // Handle CORS preflight
  if (event.requestContext?.http?.method === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { firstName, lastName, company, phone, email, remarks, products } = body;

    // Basic validation
    if (!email || !firstName || !lastName || !company || !phone || !Array.isArray(products) || products.length === 0) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const productRows = products
      .map(
        (p) => `
        <tr style="border-bottom:1px solid #f0f0f0">
          <td style="padding:10px 14px;font-size:13px">${escapeHtml(p.name)}</td>
          <td style="padding:10px 14px;font-size:13px;color:#666">${escapeHtml(p.category)}</td>
          <td style="padding:10px 14px;font-size:13px;text-align:center;font-weight:700">${p.quantity}</td>
        </tr>`
      )
      .join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:#2AB09C;padding:28px 32px">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px">New Quote Request</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px">Zenith Trends Australia · zenithtrends.com.au</p>
          </td>
        </tr>

        <!-- Customer details -->
        <tr>
          <td style="padding:28px 32px 20px">
            <h2 style="margin:0 0 16px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#2AB09C">Customer Details</h2>
            <table cellpadding="0" cellspacing="0" style="width:100%">
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;width:120px">Full name</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Company</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(company)}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Phone</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Email</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600"><a href="mailto:${escapeHtml(email)}" style="color:#2AB09C">${escapeHtml(email)}</a></td>
              </tr>
              ${remarks ? `<tr>
                <td style="padding:5px 0;color:#888;font-size:13px;vertical-align:top">Remarks</td>
                <td style="padding:5px 0;font-size:13px">${escapeHtml(remarks)}</td>
              </tr>` : ''}
            </table>
          </td>
        </tr>

        <!-- Divider -->
        <tr><td style="padding:0 32px"><hr style="border:none;border-top:1px solid #f0f0f0;margin:0"></td></tr>

        <!-- Products -->
        <tr>
          <td style="padding:24px 32px 28px">
            <h2 style="margin:0 0 16px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#2AB09C">
              Requested Products &mdash; ${products.length} item${products.length !== 1 ? 's' : ''}
            </h2>
            <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #f0f0f0;border-radius:8px;overflow:hidden">
              <thead>
                <tr style="background:#f9fafb">
                  <th style="padding:10px 14px;text-align:left;font-size:12px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.4px">Product</th>
                  <th style="padding:10px 14px;text-align:left;font-size:12px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.4px">Category</th>
                  <th style="padding:10px 14px;text-align:center;font-size:12px;font-weight:700;color:#555;text-transform:uppercase;letter-spacing:0.4px">Qty</th>
                </tr>
              </thead>
              <tbody>${productRows}</tbody>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f0f0f0">
            <p style="margin:0;font-size:11px;color:#aaa">Submitted via zenithtrends.com.au — Reply directly to this email to respond to the customer.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const textBody = [
      'NEW QUOTE REQUEST — ZENITH TRENDS',
      '='.repeat(40),
      '',
      'CUSTOMER DETAILS',
      `Name:    ${firstName} ${lastName}`,
      `Company: ${company}`,
      `Phone:   ${phone}`,
      `Email:   ${email}`,
      remarks ? `Remarks: ${remarks}` : '',
      '',
      'PRODUCTS REQUESTED',
      ...products.map((p) => `  • ${p.name} (${p.category})  ×${p.quantity}`),
      '',
      'Submitted via zenithtrends.com.au',
    ]
      .filter((l) => l !== undefined)
      .join('\n');

    await ses.send(
      new SendEmailCommand({
        Source: `Zenith Trends <${process.env.FROM_EMAIL}>`,
        Destination: {
          ToAddresses: [process.env.TO_EMAIL],
          CcAddresses: [process.env.CC_EMAIL],
        },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Data: `Quote Request: ${company} — ${products.length} product${products.length !== 1 ? 's' : ''}`,
            Charset: 'UTF-8',
          },
          Body: {
            Html: { Data: html, Charset: 'UTF-8' },
            Text: { Data: textBody, Charset: 'UTF-8' },
          },
        },
      })
    );

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error('Quote Lambda error:', err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Failed to send quote. Please contact us at info@zenithtrends.com.au' }),
    };
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
