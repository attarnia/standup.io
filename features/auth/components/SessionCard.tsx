"use client";

import type { User } from "@supabase/supabase-js";


type Props = {
    user: User | null;
    signOut: () => Promise<void>;
};


export default function SessionCard({
    user,
    signOut,
}: Props) {


    return (
        <section
            className="
rounded-3xl
border
border-border
bg-surface
p-7
text-text
"
        >

            <div className="flex items-center justify-between">

                <h3 className="text-lg font-semibold">
                    Session
                </h3>


                <span className="text-sm text-muted">
                    {user ? "Active" : "Idle"}
                </span>

            </div>



            {user ? (

                <>

                    <dl className="mt-5 space-y-3 text-sm">


                        <div className="flex justify-between">
                            <dt className="text-muted">
                                User ID
                            </dt>

                            <dd className="font-mono text-xs">
                                {user.id}
                            </dd>

                        </div>



                        <div className="flex justify-between">
                            <dt className="text-muted">
                                Email
                            </dt>

                            <dd>
                                {user.email}
                            </dd>

                        </div>



                    </dl>



                    <button
                        onClick={signOut}
                        className="
mt-6
w-full
rounded-full
bg-primary
px-4
py-2
text-primary-foreground
"
                    >
                        Sign out
                    </button>


                </>


            ) : (


                <p className="mt-5 text-muted">
                    Session metadata will appear here.
                </p>


            )}


        </section>
    )

}