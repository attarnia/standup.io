export type ReportStatus =
    | "in-progress"
    | "done"
    | "bug";


export interface Report {
    id: string;
    title: string;
    description: string;
    status: ReportStatus;
    author: string;
    createdAt: string;
}