import { Bug, CheckCircle2, Timer, type LucideIcon } from "lucide-react";
import { ReportStatus } from "@prisma/client";

export const STATUS_META = {
  IN_PROGRESS: {
    label: "In Progress",
    icon: Timer,
    badgeClass: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    activeClass: "text-amber-400 bg-amber-400/15 border-amber-400/30",
  },
  BUG: {
    label: "Bug",
    icon: Bug,
    badgeClass: "text-red-400 bg-red-400/10 border-red-400/20",
    activeClass: "text-red-400 bg-red-400/15 border-red-400/30",
  },
  DONE: {
    label: "Done",
    icon: CheckCircle2,
    badgeClass: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    activeClass: "text-emerald-400 bg-emerald-400/15 border-emerald-400/30",
  },
} as const satisfies Record<
  ReportStatus,
  {
    label: string;
    icon: LucideIcon;
    badgeClass: string;
    activeClass: string;
  }
>;

export const STATUS_OPTIONS = Object.keys(STATUS_META) as ReportStatus[];
