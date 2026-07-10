import {
    Bug,
    CheckCircle2,
    LoaderCircle,
} from "lucide-react";

export const reportStatusConfig = {
    "in-progress": {
        label: "In Progress",
        icon: LoaderCircle,
        className:
            "bg-blue-500/10 text-blue-500",
    },

    done: {
        label: "Done",
        icon: CheckCircle2,
        className:
            "bg-green-500/10 text-green-500",
    },

    bug: {
        label: "Bug",
        icon: Bug,
        className:
            "bg-red-500/10 text-red-500",
    },
} as const;