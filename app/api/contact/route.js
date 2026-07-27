import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.formData();

    const name = body.get("name");
    const email = body.get("email");
    const subject = body.get("subject");
    const message = body.get("message");
    const toEmail = body.get("toEmail");

 const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  tls: {
    rejectUnauthorized: false,
  },
});
console.log("To Email:", toEmail);
console.log("From Email:", process.env.EMAIL_USER);
   const info = await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: toEmail,
  subject: `Portfolio Contact: ${subject}`,
  html: `
    <h2>New Portfolio Message</h2>

    <p><strong>Name:</strong> ${name}</p>

    <p><strong>Email:</strong> ${email}</p>

    <p><strong>Subject:</strong> ${subject}</p>

    <p><strong>Message:</strong></p>

    <p>${message}</p>
  `,
});

console.log(info);
    return Response.json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (err) {
    console.log(err);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}