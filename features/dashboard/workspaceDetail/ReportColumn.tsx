import { reportStatusConfig } from "./constants/constants";
import ReportCard from "./ReportCard";
import { Report, ReportStatus } from "./types/types";


interface Props {
    status: ReportStatus;
    reports: Report[];
}


export default function ReportColumn({
    status,
    reports,
}: Props) {

    const config = reportStatusConfig[status];

    const Icon = config.icon;


    return (
        <section
            aria-label={`${config.label} reports`}
            className="
                rounded-3xl
                border
                border-border
                bg-surface
                p-5
            "
        >

            <header
                className="
                    mb-5
                    flex
                    items-center
                    justify-between
                "
            >

                <div
                    className={`
                        flex
                        items-center
                        gap-2
                        rounded-full
                        px-3
                        py-1.5
                        text-sm
                        font-medium
                        ${config.className}
                    `}
                >
                    <Icon
                        size={16}
                        aria-hidden="true"
                    />

                    <span>
                        {config.label}
                    </span>
                </div>


                <span
                    className="
                        text-sm
                        text-muted
                    "
                >
                    {reports.length}
                </span>

            </header>


            <ul className="space-y-4">

                {reports.map((report) => (
                    <li key={report.id}>
                        <ReportCard
                            report={report}
                        />
                    </li>
                ))}

            </ul>

        </section>
    );
}