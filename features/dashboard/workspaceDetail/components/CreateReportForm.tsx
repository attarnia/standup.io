"use client";


import { useState } from "react";

import { createReport }
    from "../actions/create-report";



interface Props {

    workspaceId: string;

}



export default function CreateReportForm({

    workspaceId

}: Props) {


    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");



    async function handleSubmit(
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
            onSubmit={handleSubmit}
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

                placeholder="Describe your task"

            />



            <button
                type="submit"
            >
                Create Task
            </button>


        </form>

    );

}