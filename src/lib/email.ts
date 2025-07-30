// src/lib/email.ts

/**
 * @fileOverview This file contains instructions and pseudo-code for integrating a real email sending service.
 * You can use services like Resend, Nodemailer, or SendGrid.
 *
 * Below is an example using Resend, which is a modern and easy-to-use service.
 */

// STEP 1: Install the necessary package
// Open your terminal and run the following command:
// npm install resend

// STEP 2: Sign up for Resend and get your API key
// 1. Go to https://resend.com/ and create a free account.
// 2. Go to the "API Keys" section in your Resend dashboard and create a new API key.
// 3. Add this API key to your environment variables. Create a file named `.env.local` in the root of your project if it doesn't exist, and add the following line:
//    RESEND_API_KEY=your_api_key_here

// STEP 3: Create the email sending function
// You can use the code below as a starting point. You would typically call this function from your Genkit flow.

/*
import { Resend } from 'resend';

// IMPORTANT: Remember to add your RESEND_API_KEY to your environment variables.
// Vercel/Firebase will need this environment variable set in the project settings.
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail({ name, email, message }: EmailPayload) {
  try {
    const { data, error } = await resend.emails.send({
      // Replace this with your own email address where you want to receive messages.
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      // This should be your personal email address.
      to: ['your-personal-email@example.com'],
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

*/

// STEP 4: Update the Genkit flow to use this function
// See the updated comments in `src/ai/flows/send-contact-email.ts`.
