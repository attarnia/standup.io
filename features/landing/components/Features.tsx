import Card from "@/components/ui/Card";
import { Zap, TrendingUp, Users, Workflow } from "lucide-react";

const features = [
  {
    icon: <Zap size={22} />,
    head: "Increased Efficiency",
    caption: "Streamline processes to save time and resources.",
  },
  {
    icon: <TrendingUp size={22} />,
    head: "Real-Time Insights",
    caption: "Access live data to make informed decisions.",
  },
  {
    icon: <Users size={22} />,
    head: "Enhanced Collaboration",
    caption: "Improve teamwork with better communication.",
  },
  {
    icon: <Workflow size={22} />,
    head: "Custom Workflows",
    caption: "Tailor workflows to fit your team's unique needs.",
  },
];

function Features() {
  return (
    <section className=" py-24">
      <h2 className="h2 mb-12 text-center">
        Unleash the full power of your Team
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Card
            key={feature.head}
            icon={feature.icon}
            head={feature.head}
            caption={feature.caption}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;
