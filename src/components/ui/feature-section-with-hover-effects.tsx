import { cn } from "@/lib/utils";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Exterior Wash",
      description:
        "Complete hand wash with premium soap and professional drying techniques.",
    },
    {
      title: "Interior Wash",
      description:
        "Thorough cleaning of all interior surfaces including seats and carpets.",
    },
    {
      title: "Floor Mat Wash",
      description:
        "Deep cleaning and washing of all floor mats for a fresh interior.",
    },
    {
      title: "Window Shine",
      description: "Crystal clear windows inside and out with streak-free finish.",
    },
    {
      title: "Tire & Rim Care",
      description: "Professional tire cleaning and rim detailing for that perfect shine.",
    },
    {
      title: "Engine Bay Detail",
      description:
        "Professional engine bay cleaning and detailing for optimal appearance.",
    },
    {
      title: "Dashboard Detail",
      description:
        "Complete dashboard cleaning and conditioning for a like-new interior.",
    },
    {
      title: "Paint Protection",
      description: "Advanced paint protection to keep your vehicle looking pristine.",
    },
    {
      title: "Bug & Salt Removal",
      description: "Specialized removal of bugs, salt, and road contaminants.",
    },
    {
      title: "Clay Treatment",
      description: "Professional clay bar treatment for smooth, contaminant-free paint.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 py-10 max-w-7xl mx-auto bg-black">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 5) && "lg:border-l border-neutral-800",
        index < 5 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 5 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 5 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};