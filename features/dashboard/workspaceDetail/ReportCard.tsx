import { User } from "lucide-react";
import { Report } from "./types/types";


interface Props {
    report: Report;
}


export default function ReportCard({
    report,
}: Props) {

    return (
        <article
            className="
                rounded-2xl
                border
                border-border
                bg-black
                p-4
                transition
                hover:border-muted/40
            "
        >

            <h3
                className="
                    font-medium
                    text-text
                "
            >
                {report.title}
            </h3>


            <p
                className="
                    mt-2
                    text-sm
                    leading-6
                    text-muted
                "
            >
                {report.description}
            </p>



            <footer
                className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    text-xs
                    text-muted
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-1.5
                    "
                >
                    <User
                        size={14}
                        aria-hidden="true"
                    />

                    <span>
                        {report.author}
                    </span>
                </div>


                <time>
                    {report.createdAt}
                </time>

            </footer>

        </article>
    );
}