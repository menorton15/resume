import { z } from "zod";
import nodemailer from "nodemailer"
import { SMTPClient } from "smtp-client";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const emailRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        company: z.string().min(1),
        email: z.string().email(),
        message: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      console.log("Received input:", input);
      const { name, company, email, message } = input;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_PORT === '465', // Use SSL if port is 465
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER /*process.env.SMTP_USER*/,
        to: "contact@matthew-norton.dev",
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`,
      };

      try {
        console.log('Sending email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        return { message: 'Email sent successfully' };
      } catch (error) {
        if (error instanceof Error) {
          console.error("SMTP Error:", error.message);
          throw new Error(`Failed to send email: ${error.message}`);
        } else {
          console.error("Unexpected error", error);
          throw new Error("Failed to send email due to an unexpected error");
        }
      }
        
      
    }),
});
