import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const contactSubmissionsTable = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const newsletterSubscribersTable = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  firstName: text("first_name"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissionsTable).omit({ id: true, createdAt: true });
export type InsertContact = z.infer<typeof insertContactSchema>;

export const insertNewsletterSchema = createInsertSchema(newsletterSubscribersTable).omit({ id: true, createdAt: true });
export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
