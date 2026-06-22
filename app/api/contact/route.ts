import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const from = process.env.FROM_EMAIL ?? "DHJ Contact <onboarding@resend.dev>";
      const to = process.env.CONTACT_EMAIL ?? "simplymusic@verizon.net";

      await resend.emails.send({
        from,
        to,
        subject: `DHJ Indie Show — Message from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#211a14;">
            <h2 style="color:#6d1019;margin-bottom:4px;">New message via DHJ Indie Show</h2>
            <hr style="border:none;border-top:1px solid #ede4d4;margin:16px 0"/>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border:none;border-top:1px solid #ede4d4;margin:16px 0"/>
            <p style="white-space:pre-wrap;line-height:1.7;">${message}</p>
          </div>
        `,
        replyTo: email,
      });
    } catch (err) {
      console.error("[contact] Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
  } else {
    // Dev/preview: log submission, no email sent
    console.log("[contact] RESEND_API_KEY not set — submission logged:", { name, email, message });
  }

  return NextResponse.json({ success: true });
}
