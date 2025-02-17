// app/api/submit-application/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = [];

    if (formData.get("photo")) {
      const photoFile = formData.get("photo");
      const buffer = Buffer.from(await photoFile.arrayBuffer());
      attachments.push({
        filename: photoFile.name,
        content: buffer,
      });
    }

    if (formData.get("casteCertificate")) {
      const casteCertificateFile = formData.get("casteCertificate");
      const buffer = Buffer.from(await casteCertificateFile.arrayBuffer());
      attachments.push({
        filename: casteCertificateFile.name,
        content: buffer,
      });
    }

    if (formData.get("transferCertificate")) {
      const transferCertificateFile = formData.get("transferCertificate");
      const buffer = Buffer.from(await transferCertificateFile.arrayBuffer());
      attachments.push({
        filename: transferCertificateFile.name,
        content: buffer,
      });
    }

    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Application Form Submission",
      html: `
        <h1>New Application Submission</h1>
        <p>Applicant Name: ${formData.get("applicantName")}</p>
        <p>Father's Name: ${formData.get("fatherName")}</p>
        <p>Father's Occupation: ${formData.get("fatherOccupation")}</p>
        <p>Mother's Name: ${formData.get("motherName")}</p>
        <p>Mother's Occupation: ${formData.get("motherOccupation")}</p>
        <p>Date of Birth: ${formData.get("dateOfBirth")}</p>
        <p>Gender: ${formData.get("gender")}</p>
        <p>Class to be Admitted: ${formData.get("classToBeAdmitted")}</p>
        <p>Mode of Enrollment: ${formData.get("modeOfEnrollment")}</p>
        <p>Dietary Preference: ${formData.get("dietaryPreference")}</p>
        <p>Nationality: ${formData.get("nationality")}</p>
        <p>Religion: ${formData.get("religion")}</p>
        <p>Caste: ${formData.get("caste")}</p>
        <p>Last School: ${formData.get("lastSchool")}</p>
        <p>Reason for Leaving: ${formData.get("reasonForLeaving")}</p>
        <p>Medium of Instruction: ${formData.get("mediumOfInstruction")}</p>
        <p>Contact Address: ${formData.get("contactAddress")}</p>
        <p>Village/City: ${formData.get("village")}</p>
        <p>Taluk: ${formData.get("taluk")}</p>
        <p>District: ${formData.get("district")}</p>
        <p>State: ${formData.get("state")}</p>
        <p>Country: ${formData.get("country")}</p>
        <p>Postal Code: ${formData.get("postalCode")}</p>
        <p>Mobile Number: ${formData.get("mobileNumber")}</p>
        <p>Landline Number: ${formData.get("landlineNumber")}</p>
        <p>Emergency Contact: ${formData.get("emergencyContact")}</p>
      `,
      attachments: attachments,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
