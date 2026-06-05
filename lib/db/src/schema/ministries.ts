import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const ministriesTable = pgTable("ministries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  leader: text("leader").notNull(),
  meetingTime: text("meeting_time").notNull(),
  imageUrl: text("image_url"),
  category: text("category").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertMinistrySchema = createInsertSchema(ministriesTable).omit({ id: true, createdAt: true });
export type InsertMinistry = z.infer<typeof insertMinistrySchema>;
export type Ministry = typeof ministriesTable.$inferSelect;
