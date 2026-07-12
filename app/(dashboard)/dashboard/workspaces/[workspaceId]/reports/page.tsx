import CreateReportForm from "@/features/dashboard/reports/components/CreateReportForm";

export default async function ReportsPage({

    params

}: {
    params: Promise<{
        workspaceId: string
    }>
}) {


    const {
        workspaceId
    } = await params;



    return (

        <div>

            <h1>
                Reports
            </h1>


            <CreateReportForm

                workspaceId={workspaceId}

            />


        </div>


    )

}