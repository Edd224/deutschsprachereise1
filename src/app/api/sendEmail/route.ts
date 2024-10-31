import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();

  const msg = {
    to: 'enno225@gmail.com',   // Vaša adresa na prijímanie správ
    from: 'enno225@gmail.com', // Overená adresa v SendGrid
    replyTo: email,            // Adresa užívateľa, na ktorú budete odpovedať
    subject: subject,
    html: `
      <html>
        <body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
          <table style="width: 100%; background-color: #f4f4f4; padding: 20px;">
            <tr>
              <td>
                <table style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                  <tr>
                    <td style="padding: 20px; text-align: center; background-color: #4CAF50; color: #ffffff; border-radius: 8px 8px 0 0;">
                      <h1 style="margin: 0;">New Message from ${name}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; color: #333333;">
                      <p style="font-size: 16px;">Nová správa z mailu:</p>
                      <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
                      <p style="font-size: 16px;"><strong>Správa:</strong> ${message}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 20px; text-align: center; color: #888888; font-size: 12px;">
                      <p>Thank you for using our service!</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  };
  
  try {
    await sgMail.send(msg);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
