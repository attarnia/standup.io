export interface Report {
  id: string;

  author: {
    name: string;
    avatar?: string | null;
  };

  submittedAt: string;

  badge: {
    label: string;
    variant: "default" | "success" | "warning" | "primary";
  };

  content: string;
}
