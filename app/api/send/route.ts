import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY || !process.env.RESEND_EMAIL_TO) {
  throw new Error("RESEND_API_KEY is not configured in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { fullName, email, phone, project } = body;

    // Validate required fields
    if (!fullName || !email || !project) {
      return Response.json(
        {
          error:
            "Missing required fields: fullName, email, and project are required",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Roofing Contact <no-reply@zprroofing.com>",
      to: [process.env.RESEND_EMAIL_TO!],
      subject: `Website Contact Form – New Inquiry from ${fullName}`,
      react: EmailTemplate({
        fullName,
        email,
        phone: phone || "Not provided",
        project,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
