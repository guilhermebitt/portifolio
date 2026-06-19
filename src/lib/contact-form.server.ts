import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { sendContactEmail } from "@/lib/send-contact-email.server";

const ContactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((data: unknown) => ContactFormSchema.parse(data))
  .handler(async ({ data }) => {
    await sendContactEmail(data);

    return {
      ok: true,
    };
  });
