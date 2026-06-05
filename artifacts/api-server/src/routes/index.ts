import { Router, type IRouter } from "express";
import healthRouter from "./health";
import sermonsRouter from "./sermons";
import eventsRouter from "./events";
import prayersRouter from "./prayers";
import blogRouter from "./blog";
import contactRouter from "./contact";
import statsRouter from "./stats";
import testimonialsRouter from "./testimonials";
import ministriesRouter from "./ministries";

const router: IRouter = Router();

router.use(healthRouter);
router.use(sermonsRouter);
router.use(eventsRouter);
router.use(prayersRouter);
router.use(blogRouter);
router.use(contactRouter);
router.use(statsRouter);
router.use(testimonialsRouter);
router.use(ministriesRouter);

export default router;
