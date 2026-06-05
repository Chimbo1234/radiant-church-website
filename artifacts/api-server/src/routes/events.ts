import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, eventsTable } from "@workspace/db";
import {
  ListEventsQueryParams,
  ListEventsResponse,
  GetEventParams,
  GetEventResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/events", async (req, res): Promise<void> => {
  const query = ListEventsQueryParams.safeParse(req.query);
  if (!query.success) {
    res.status(400).json({ error: query.error.message });
    return;
  }

  const { limit = 10, upcoming } = query.data;
  const all = await db.select().from(eventsTable).orderBy(desc(eventsTable.createdAt));

  let filtered = all;
  if (upcoming) {
    const today = new Date().toISOString().split("T")[0];
    filtered = all.filter((e) => e.date >= today);
  }

  const paged = filtered.slice(0, limit);
  res.json(ListEventsResponse.parse(paged));
});

router.get("/events/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetEventParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [event] = await db
    .select()
    .from(eventsTable)
    .where(eq(eventsTable.id, params.data.id));

  if (!event) {
    res.status(404).json({ error: "Event not found" });
    return;
  }

  res.json(GetEventResponse.parse(event));
});

export default router;
