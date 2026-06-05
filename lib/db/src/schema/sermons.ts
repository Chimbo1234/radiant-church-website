import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const sermonsTable = pgTable("sermons", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  speaker: text("speaker").notNull(),
  date: text("date").notNull(),
  duration: text("duration").notNull(),
  series: text("series").notNull(),
  description: text("description"),
  thumbnailUrl: text("thumbnail_url"),
  videoUrl: text("video_url"),
  audioUrl: text("audio_url"),
  scripture: text("scripture"),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertSermonSchema = createInsertSchema(sermonsTable).omit({ id: true, createdAt: true });
export type InsertSermon = z.infer<typeof insertSermonSchema>;
export type Sermon = typeof sermonsTable.$inferSelect;
