// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

// Define recipient emails
const recipientEmails = ["neginzpoure@gmail.com", "kieran@theholygrailstudio.com"];

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Initialize Firebase Admin if service account exists
let db: any = null;
try {
  const serviceAccountPath = path.join(process.cwd(), "service-account.json");
  
  // Check if service account file exists
  if (fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    
    if (!getApps().length) {
      initializeApp({
        credential: cert(serviceAccount),
      });
    }
    
    db = getFirestore();
    console.log("Firebase initialized successfully");
  } else {
    console.log("Service account file not found, Firebase storage disabled");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

// 3) POST handler
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Write to Firestore if available
    if (db) {
      try {
        await db.collection("contactMessages").add({
          name,
          email,
          message,
          createdAt: new Date().toISOString(),
        });
        console.log("Message saved to Firestore");
      } catch (error) {
        console.error("Error saving to Firestore:", error);
        // Continue with email sending even if Firestore fails
      }
    }

    // Format the current date
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // 1. Send email to recipients
    await transporter.sendMail({
      from: `"Negin Poure Website" <${process.env.EMAIL_USER}>`,
      to: recipientEmails.join(", "),
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Date:</strong> ${currentDate}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });

    // 2. Send confirmation email to sender
    await transporter.sendMail({
      from: `"Negin Poure" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Negin Poure",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Message</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to me through my website. I have received your message and will get back to you as soon as possible.</p>
          <p>For your records, here is a copy of your message:</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p>If you need to reach me directly, you can also email me at <a href="mailto:neginzpurse@gmail.com">neginzpurse@gmail.com</a>.</p>
          <p>Best regards,<br>Negin Poure</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error in contact route:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
