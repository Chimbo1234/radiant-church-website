import { Router, type IRouter } from "express";
import { eq, desc } from "drizzle-orm";
import { db, blogPostsTable } from "@workspace/db";
import {
  ListBlogPostsQueryParams,
  ListBlogPostsResponse,
  GetBlogPostParams,
  GetBlogPostResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/blog", async (req, res): Promise<void> => {
  const query = ListBlogPostsQueryParams.safeParse(req.query);
  if (!query.success) {
    res.status(400).json({ error: query.error.message });
    return;
  }

  const { limit = 10, offset = 0, category } = query.data;
  const all = await db.select().from(blogPostsTable).orderBy(desc(blogPostsTable.createdAt));

  const filtered = category ? all.filter((p) => p.category === category) : all;
  const paged = filtered.slice(offset, offset + limit);

  res.json(ListBlogPostsResponse.parse(paged));
});

router.get("/blog/:id", async (req, res): Promise<void> => {
  const raw = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const params = GetBlogPostParams.safeParse({ id: raw });
  if (!params.success) {
    res.status(400).json({ error: params.error.message });
    return;
  }

  const [post] = await db
    .select()
    .from(blogPostsTable)
    .where(eq(blogPostsTable.id, params.data.id));

  if (!post) {
    res.status(404).json({ error: "Blog post not found" });
    return;
  }

  res.json(GetBlogPostResponse.parse(post));
});

export default router;
