import { Router, type IRouter } from "express";
import { db, contactSubmissionsTable, newsletterSubscribersTable } from "@workspace/db";
import { SubmitContactBody, SubscribeNewsletterBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  await db.insert(contactSubmissionsTable).values({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone ?? null,
    subject: parsed.data.subject ?? null,
    message: parsed.data.message,
  });

  res.status(201).json({ success: true, message: "Your message has been received. We will be in touch soon." });
});

router.post("/newsletter", async (req, res): Promise<void> => {
  const parsed = SubscribeNewsletterBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  try {
    await db.insert(newsletterSubscribersTable).values({
      email: parsed.data.email,
      firstName: parsed.data.firstName ?? null,
    });
    res.status(201).json({ success: true, message: "You have been successfully subscribed to our newsletter." });
  } catch {
    res.status(409).json({ success: false, message: "This email is already subscribed." });
  }
});

export default router;
