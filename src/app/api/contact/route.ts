import client from '@/config/postmark';

export async function POST(request: Request) {
  const body = await request.json();
  try {
    await client.sendEmail({
      From: process.env.EMAIL_FROM,
      To: process.env.EMAIL_TO,
      Subject: 'Porfolio Contact Form',
      HtmlBody: `
        <h1>Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${body.person_name}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
      ReplyTo: body.email,
    });
    return new Response('ok', { status: 200 });
  } catch (e) {
    return new Response('error', { status: 500 });
  }
}
