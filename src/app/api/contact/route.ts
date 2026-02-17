// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

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

let dbPromise: Promise<any | null> | null = null;

async function getDb() {
  if (dbPromise) return dbPromise;

  dbPromise = (async () => {
    const serviceAccountPath = path.join(process.cwd(), "service-account.json");

    if (!fs.existsSync(serviceAccountPath)) {
      console.log("Service account file not found, Firebase storage disabled");
      return null;
    }

    try {
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

      const { initializeApp, cert, getApps } = await import("firebase-admin/app");
      const { getFirestore } = await import("firebase-admin/firestore");

      if (!getApps().length) {
        initializeApp({
          credential: cert(serviceAccount),
        });
      }

      console.log("Firebase initialized successfully");
      return getFirestore();
    } catch (error) {
      console.error("Error initializing Firebase:", error);
      return null;
    }
  })();

  return dbPromise;
}

// 3) POST handler
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Write to Firestore if available
    const db = await getDb();
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
