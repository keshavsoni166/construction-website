import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const { name, email, message } = body;

    const data = await resend.emails.send({

      from: "onboarding@resend.dev",

      to: "ltrekkers69@gmail.com",

      subject: `New Inquiry from ${name}`,

      html: `
        <div style="font-family:sans-serif;padding:20px">

          <h2>New Website Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>

        </div>
      `,
    });

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {

    return Response.json({
      success: false,
      error,
    });
  }
}