import { Router, type IRouter } from "express";
import { db, ministriesTable } from "@workspace/db";
import { ListMinistriesResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/ministries", async (_req, res): Promise<void> => {
  const ministries = await db.select().from(ministriesTable);
  res.json(ListMinistriesResponse.parse(ministries));
});

export default router;
