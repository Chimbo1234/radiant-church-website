import { Router, type IRouter } from "express";
import { db, prayersTable } from "@workspace/db";
import { SubmitPrayerRequestBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/prayers", async (req, res): Promise<void> => {
  const parsed = SubmitPrayerRequestBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [prayer] = await db
    .insert(prayersTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email ?? null,
      request: parsed.data.request,
      isPrivate: parsed.data.isPrivate ?? false,
    })
    .returning();

  res.status(201).json({
    id: prayer.id,
    name: prayer.name,
    request: prayer.request,
    createdAt: prayer.createdAt.toISOString(),
    isPrivate: prayer.isPrivate,
  });
});

export default router;
