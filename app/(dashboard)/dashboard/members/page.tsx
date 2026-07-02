"use client";
import Button from "@/components/ui/Button";
import ListUser from "@/components/ui/ListUser";
import UserCard from "@/components/ui/UserCard";
import { ChevronDown, Search, LayoutGrid, List, Circle } from "lucide-react";
import { useState } from "react";

const users = [
  {
    id: 1,
    name: "aa_alfa",
    initials: "A",
    online: true,
    role: "Developer",
  },
  {
    id: 2,
    name: "reza sadeghi",
    initials: "RS",
    online: false,
    role: "Owner Project",
  },
];

function MemberPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  return (
    <>
      <header className="border-b border-muted/50 ">
        <div className="flex flex-row justify-between items-center mb-4">
          <h3>All People</h3>
          <Button type="button" color="primary">
            Invite
          </Button>
        </div>
      </header>
      <section className="">
        <div className="flex flex-row justify-between items-center my-5">
          <div className="flex gap-3 flex-wrap">
            {["Status", "Team", "Account type", "Manager", "Sort"].map(
              (item) => (
                <button
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06]"
                >
                  {item}
                  <ChevronDown size={15} />
                </button>
              ),
            )}
          </div>{" "}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
              <Search size={18} />
              Search
            </button>

            <div className="flex rounded-xl border border-white/10 overflow-hidden">
              <button
                onClick={() => setView("grid")}
                className={`p-2 transition ${
                  view === "grid"
                    ? "bg-primary text-white"
                    : "hover:bg-white/5 text-zinc-400"
                }`}
              >
                <LayoutGrid size={18} />
              </button>

              <button
                onClick={() => setView("list")}
                className={`p-2 transition ${
                  view === "list"
                    ? "bg-primary text-white"
                    : "hover:bg-white/5 text-zinc-400"
                }`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-3"
          }
        >
          {users.map((user) =>
            view === "grid" ? (
              // ---------------- GRID CARD ----------------
              <UserCard
                key={user.id}
                initials={user.initials}
                name={user.name}
                online={user.online}
                role={user.role}
              />
            ) : (
              // ---------------- LIST ITEM ----------------
              <ListUser
                key={user.id}
                initials={user.initials}
                name={user.name}
                online={user.online}
                role={user.role}
              />
            ),
          )}
        </div>
      </section>
    </>
  );
}

export default MemberPage;
