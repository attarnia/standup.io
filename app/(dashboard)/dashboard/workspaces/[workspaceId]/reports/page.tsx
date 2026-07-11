import CreateReportForm from "@/features/dashboard/workspaceDetail/components/CreateReportForm";


interface Props {

    params: {
        workspaceId: string
    }

}


export default async function ReportsPage({

    params

}: Props) {


    const {
        workspaceId
    } = params;



    return (

        <main>

            <h1>
                Reports
            </h1>


            <CreateReportForm

                workspaceId={workspaceId}

            />


        </main>

    );

}