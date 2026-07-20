import Card from "@/components/ui/Card";
import { FolderPlus, Users, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <FolderPlus size={22} />,
    title: "Create Workspace",
    caption: "Set up your workspace and organize projects in minutes.",
  },
  {
    icon: <Users size={22} />,
    title: "Invite Team",
    caption: "Bring your team together and collaborate seamlessly.",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Track Progress",
    caption: "Monitor performance and stay on top of every task.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24" id="howItWorks">
      <div >
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-zinc-800 px-4 py-1 text-sm text-muted">
            How It Works
          </span>

          <h2 className="mb-4 text-4xl font-bold">
            Get started in three simple steps
          </h2>

          <p className=" text-muted">
            Everything you need to manage your workflow, collaborate with your
            team, and scale faster.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card
                icon={step.icon}
                title={step.title}
                caption={step.caption}
                stepNumber={index + 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
