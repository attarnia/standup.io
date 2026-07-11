import { z } from "zod";

export const createReportSchema = z.object({
  title: z.string().min(3).max(100),

  description: z.string().max(500).optional(),
});

export type CreateReportInput = z.infer<typeof createReportSchema>;
