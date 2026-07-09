import ReportColumn from "./ReportColumn";
import { Report } from "./types/types";


const reports: Report[] = [
    {
        id: "1",
        title: "Create workspace flow",
        description: "Implement workspace creation form.",
        status: "in-progress",
        author: "mmd",
        createdAt: "2 hours ago",
    },
    {
        id: "2",
        title: "Setup dashboard layout",
        description: "Create responsive dashboard structure.",
        status: "in-progress",
        author: "sara",
        createdAt: "3 hours ago",
    },
    {
        id: "3",
        title: "Create workspace settings",
        description: "Add workspace configuration page.",
        status: "in-progress",
        author: "amir",
        createdAt: "Today",
    },
    {
        id: "4",
        title: "Implement invite flow",
        description: "Create workspace invitation system.",
        status: "in-progress",
        author: "mmd",
        createdAt: "Yesterday",
    },
    {
        id: "5",
        title: "Add member management",
        description: "Manage workspace members and roles.",
        status: "in-progress",
        author: "sara",
        createdAt: "Yesterday",
    },

    {
        id: "6",
        title: "Authentication completed",
        description: "Google and email authentication done.",
        status: "done",
        author: "sara",
        createdAt: "Yesterday",
    },
    {
        id: "7",
        title: "Database schema created",
        description: "Workspace and user tables are ready.",
        status: "done",
        author: "mmd",
        createdAt: "2 days ago",
    },
    {
        id: "8",
        title: "Landing page finished",
        description: "Complete responsive landing page.",
        status: "done",
        author: "amir",
        createdAt: "3 days ago",
    },
    {
        id: "9",
        title: "Login redirect flow",
        description: "Redirect users after authentication.",
        status: "done",
        author: "sara",
        createdAt: "4 days ago",
    },
    {
        id: "10",
        title: "Workspace card UI",
        description: "Create workspace card component.",
        status: "done",
        author: "mmd",
        createdAt: "5 days ago",
    },

    {
        id: "11",
        title: "Mobile navigation issue",
        description: "Fix navigation on small screens.",
        status: "bug",
        author: "amir",
        createdAt: "Today",
    },
    {
        id: "12",
        title: "Button alignment issue",
        description: "Fix mobile layout problem.",
        status: "bug",
        author: "mmd",
        createdAt: "Today",
    },
    {
        id: "13",
        title: "Incorrect member count",
        description: "Member count is not updating correctly.",
        status: "bug",
        author: "sara",
        createdAt: "Yesterday",
    },
    {
        id: "14",
        title: "Invite link expiration bug",
        description: "Expired links are still accessible.",
        status: "bug",
        author: "amir",
        createdAt: "2 days ago",
    },
    {
        id: "15",
        title: "Profile update error",
        description: "User profile changes are not saved.",
        status: "bug",
        author: "mmd",
        createdAt: "3 days ago",
    },
];


const columns = [
    "in-progress",
    "done",
    "bug",
] as const;



export default function ReportBoard() {

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5
                md:grid-cols-2
                xl:grid-cols-3
            "
        >

            {columns.map((status) => (

                <ReportColumn
                    key={status}
                    status={status}
                    reports={
                        reports.filter(
                            (report) =>
                                report.status === status
                        )
                    }
                />

            ))}

        </div>
    );
}