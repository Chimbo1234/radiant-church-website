import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, sermonsTable } from "@workspace/db";
import {
  ListSermonsQueryParams,
  ListSermonsResponse,
  GetFeaturedSermonResponse,
  GetSermonParams,
  GetSermonResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/sermons", async (req, res): Promise<void> => {
  const query = ListSermonsQueryParams.safeParse(req.query);
  if (!query.success) {
    res.status(400).json({ error: query.error.message });
    return;
  }

  const { limit = 10, offset = 0, series } = query.data;
  let q = db.select().from(sermonsTable).orderBy(desc(sermonsTable.createdAt));

  const all = await db.select().from(sermonsTable).orderBy(desc(sermonsTable.createdAt));
  const filtered = series ? all.filter((s) => s.series === series) : all;
  const paged = filtered.slice(offset, offset + limit);

  res.json(ListSermonsResponse.parse(paged));
});

router.get("/sermons/featured", async (_req, res): Promise<void> => {
  const [featured] = await db
    .select()
    .from(sermonsTable)
    .where(eq(sermonsTable.featured, true))
    .orderBy(desc(sermonsTable.createdAt))
    .limit(1);

  if (!featured) {
    const [latest] = await db
      .select()
      .from(sermonsTable)
      .orderBy(desc(sermonsTable.createdAt))
      .limit(1);

    if (!latest) {
      res.status(404).json({ error: "No sermons found" });
      return;
    }
    res.json(GetFeaturedSermonResponse.parse(latest));
    return;
  }

  res.json(GetFeaturedSermonResponse.parse(featured));
});

router.get("/sermons/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetSermonParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [sermon] = await db
    .select()
    .from(sermonsTable)
    .where(eq(sermonsTable.id, params.data.id));

  if (!sermon) {
    res.status(404).json({ error: "Sermon not found" });
    return;
  }

  res.json(GetSermonResponse.parse(sermon));
});

export default router;
