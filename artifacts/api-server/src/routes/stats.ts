import { Router, type IRouter } from "express";
import { GetChurchStatsResponse } from "@workspace/api-zod";

const router: IRouter = Router();

router.get("/stats", async (_req, res): Promise<void> => {
  const stats = {
    memberCount: 12500,
    yearsEstablished: 28,
    countriesReached: 47,
    livesTransformed: 85000,
    weeklyAttendance: 4200,
    missionaryPartners: 130,
  };

  res.json(GetChurchStatsResponse.parse(stats));
});

export default router;
