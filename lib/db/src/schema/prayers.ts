import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const prayersTable = pgTable("prayers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  request: text("request").notNull(),
  isPrivate: boolean("is_private").notNull().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertPrayerSchema = createInsertSchema(prayersTable).omit({ id: true, createdAt: true });
export type InsertPrayer = z.infer<typeof insertPrayerSchema>;
export type Prayer = typeof prayersTable.$inferSelect;
