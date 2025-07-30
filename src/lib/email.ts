// src/lib/email.ts
'use server';

import { Resend } from 'resend';

// IMPORTANT: Remember to add your RESEND_API_KEY to your environment variables.
// Vercel/Firebase will need this environment variable set in the project settings.
// Create a file named `.env.local` in the root of your project and add:
// RESEND_API_KEY=your_api_key_here
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailPayload) {
  try {
    const { data, error } = await resend.emails.send({
      // This is a required sender address. You can use a default provided by Resend.
      // It's recommended to eventually verify your own domain with Resend.
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      // This should be YOUR personal email address where you want to receive messages.
      to: ['your-personal-email@example.com'], // <<<<<<< IMPORTANT: REPLACE THIS with your actual email address.
      subject: `New message from ${name} on your portfolio`,
      // The email content.
      html: `
        <p>You have received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, message: 'Failed to send email.' };
    }

    console.log('Email sent successfully:', data);
    return { success: true, message: 'Email sent successfully!' };

  } catch (e) {
    console.error('An exception occurred while sending email:', e);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
