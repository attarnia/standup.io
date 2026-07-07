import { Workspace } from "../types/types";

export const workspaces: Workspace[] = [
  {
    id: "1",
    name: "StandUp",
    description: "Daily standup management platform.",
    members: 5,
    updatedAt: "2 hours ago",
    role: {
      label: "Owner",
      variant: "primary",
    },
  },
  {
    id: "2",
    name: "Mobile App",
    description: "Client application for iOS and Android.",
    members: 8,
    updatedAt: "Yesterday",
    role: {
      label: "Member",
      variant: "success",
    },
  },
  {
    id: "3",
    name: "Portfolio",
    description: "Personal portfolio website.",
    members: 2,
    updatedAt: "3 days ago",
    role: {
      label: "Owner",
      variant: "primary",
    },
  },
];