import Card from "@/components/ui/Card";
import { Zap, TrendingUp, Users, Workflow } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Zap size={22} />,
    head: "Increased Efficiency",
    caption: "Streamline processes to save time and resources.",
  },
  {
    id: 4,
    icon: <TrendingUp size={22} />,
    head: "Real-Time Insights",
    caption: "Access live data to make informed decisions.",
  },
  {
    id: 2,
    icon: <Users size={22} />,
    head: "Enhanced Collaboration",
    caption: "Improve teamwork with better communication.",
  },
  {
    id: 3,
    icon: <Workflow size={22} />,
    head: "Custom Workflows",
    caption: "Tailor workflows to fit your team's unique needs.",
  },
];

function Features() {
  return (
    <section className=" py-24">
      <div className="text-center">
        <span className="mb-4 inline-block rounded-full border border-zinc-800 px-4 py-1 text-sm text-(--muted)">
          Features
        </span>
        <h2 className="h2 mb-12 text-center">
          Unleash the full power of your Team
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card
            key={feature.id}
            icon={feature.icon}
            title={feature.head}
            caption={feature.caption}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
