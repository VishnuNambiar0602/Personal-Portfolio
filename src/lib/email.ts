// src/lib/email.ts
'use server';

import { Resend } from 'resend';

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error('RESEND_API_KEY is not set. Email not sent.');
    // It's important to provide feedback to the developer in the console
    // and a user-friendly message in the UI.
    return { success: false, message: 'The email service is not configured. Please contact the administrator.' };
  }
  
  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      // This is a required sender address. You can use a default provided by Resend.
      // It's recommended to eventually verify your own domain with Resend.
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      // This should be YOUR personal email address where you want to receive messages.
      to: ['vishnunambiar2006@gmail.com'], // <<<<<<< IMPORTANT: REPLACE THIS with your actual email address.
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
