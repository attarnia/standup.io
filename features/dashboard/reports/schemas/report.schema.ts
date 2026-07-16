import { z } from "zod";
import { ReportStatus } from "@prisma/client";

export const createReportSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().max(500).optional(),
  status: z.nativeEnum(ReportStatus).default("IN_PROGRESS"),
});

export type CreateReportInput = z.infer<typeof createReportSchema>;