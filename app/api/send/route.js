import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      $dob,
      $classToBeAdmitted,
      $guardianName,
      $address,
      $mobile,
      $mode,
      $gender,
    } = body;

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Admission Enquiry from ${name}`,
      html: `
        <h1>Admission Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Birth:</strong> ${$dob}</p>
        <p><strong>Class to be Admitted:</strong> ${$classToBeAdmitted}</p>
        <p><strong>Guardian Name:</strong> ${$guardianName}</p>
        <p><strong>Address:</strong> ${$address}</p>
        <p><strong>Mobile:</strong> ${$mobile}</p>
        <p><strong>Mode:</strong> ${$mode}</p>
        <p><strong>Gender:</strong> ${$gender}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: error.message });
  }
}
