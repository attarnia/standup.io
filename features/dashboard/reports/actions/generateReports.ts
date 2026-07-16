// app/dashboard/actions.ts
"use server";

import { ai } from "@/lib/ai/AiInit";
import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/server-client";

export async function generateTodaySummary(workspaceIds: string[]) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");

  const reports = await prisma.report.findMany({
    where: {
      workspaceId: { in: workspaceIds },
      createdAt: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
    },
    include: { creator: true },
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  if (reports.length === 0) {
    return { summary: null, error: "No reports today" };
  }

  const lines = reports.map(
    (r) =>
      `- [${r.status}] "${r.title}" by ${r.creator.name}${
        r.description ? `: ${r.description}` : ""
      }`,
  );

  const prompt = `Summarize today's standup reports in 2-3 concise sentences. Highlight any blockers (status BUG) and overall progress.\n\n${lines.join("\n")}`;

  try {
    const result = await ai.generate(prompt);
    return { summary: result.text, error: null };
  } catch (e) {
    return {
      summary: null,
      error: e instanceof Error ? e.message : "AI summary unavailable",
    };
  }
}
