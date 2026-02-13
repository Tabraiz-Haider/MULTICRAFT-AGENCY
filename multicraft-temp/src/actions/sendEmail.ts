'use server'
import nodemailer from 'nodemailer';

export async function sendEmailAction(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

  try {
    await transporter.sendMail({
      from: email as string,
      to: 'info.multicraftagency@gmail.com',
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false };
  }
}