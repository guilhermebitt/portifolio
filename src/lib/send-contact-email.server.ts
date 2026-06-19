import nodemailer from "nodemailer";
import { personal } from "@/lib/portfolio-data";

export type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const transporter = nodemailer.createTransport({
    host: getRequiredEnv("SMTP_HOST"),
    port: Number(getRequiredEnv("SMTP_PORT")),
    secure: getRequiredEnv("SMTP_SECURE") === "true",
    auth: {
      user: getRequiredEnv("SMTP_USER"),
      pass: getRequiredEnv("SMTP_PASS"),
    },
  });

  const from = process.env.CONTACT_FROM_EMAIL ?? getRequiredEnv("SMTP_USER");
  const to = process.env.CONTACT_TO_EMAIL ?? personal.email;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `New portfolio message from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <h2>New portfolio message</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Message:</strong></p>
      <p>${payload.message.replace(/\n/g, "<br />")}</p>
    `,
  });
}
