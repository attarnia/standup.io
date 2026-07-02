import { Report } from "../types";

export const reports: Report[] = [
  {
    id: "1",
    author: {
      name: "Ali",
    },
    submittedAt: "09:15 AM",
    badge: {
      label: "DONE",
      variant: "success",
    },
    content:
      "Implemented authentication with Supabase and started working on the invite flow.",
  },
  {
    id: "2",
    author: {
      name: "Sara",
    },
    submittedAt: "10:02 AM",
    badge: {
      label: "LATE",
      variant: "warning",
    },
    content: "Finished dashboard UI and fixed responsive issues.",
  },
  {
    id: "3",
    author: {
      name: "John",
    },
    submittedAt: "11:18 AM",
    badge: {
      label: "DONE",
      variant: "success",
    },
    content: "Created Prisma models and connected project members.",
  },
];
