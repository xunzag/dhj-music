import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, role, message } = body ?? {};

  if (!name?.trim() || !email?.trim() || !role?.trim()) {
    return NextResponse.json({ error: "Name, email, and creator type are required." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      const from = process.env.FROM_EMAIL ?? "Simply Music <onboarding@resend.dev>";
      const to = process.env.CONTACT_EMAIL ?? "simplymusic@verizon.net";

      await resend.emails.send({
        from,
        to,
        subject: `Simply Music — Feature Application from ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#211a14;">
            <h2 style="color:#6d1019;margin-bottom:4px;">New feature application — Simply Music Inc.</h2>
            <hr style="border:none;border-top:1px solid #ede4d4;margin:16px 0"/>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>What they create:</strong> ${role}</p>
            ${message ? `<hr style="border:none;border-top:1px solid #ede4d4;margin:16px 0"/>
            <p style="white-space:pre-wrap;line-height:1.7;">${message}</p>` : ""}
          </div>
        `,
        replyTo: email,
      });
    } catch (err) {
      console.error("[apply] Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }
  } else {
    console.log("[apply] RESEND_API_KEY not set — submission logged:", { name, email, role, message });
  }

  return NextResponse.json({ success: true });
}
