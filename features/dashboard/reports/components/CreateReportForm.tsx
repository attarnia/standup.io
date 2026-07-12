"use client";


import {
    useState
} from "react";


import {
    createReport
}
    from "../actions/create-report";



export default function CreateReportForm({

    workspaceId

}: {

    workspaceId: string

}) {


    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");



    async function submit(
        e: React.FormEvent
    ) {

        e.preventDefault();



        await createReport(

            workspaceId,

            {
                title,
                description
            }

        );



        setTitle("");

        setDescription("");

    }



    return (

        <form
            onSubmit={submit}
            className="space-y-4"
        >


            <input

                value={title}

                onChange={
                    e => setTitle(e.target.value)
                }

                placeholder="Task title"

            />



            <textarea

                value={description}

                onChange={
                    e => setDescription(e.target.value)
                }

                placeholder="Description"

            />



            <button>

                Create Task

            </button>



        </form>


    )

}