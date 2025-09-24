import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Exterior Wash",
      src: "/images/IMG_8384.png",
    },
    {
      title: "Exterior Wash",
      src: "/images/IMG_9018.png",
    },
    {
      title: "Exterior Wash", 
      src: "/images/IMG_9026.png",
    },
    {
      title: "Interior Wash", 
      src: "/images/IMG_8383-preview.png",
    },
    {
      title: "Tire & Rim Care",
      src: "/images/pexels-tima-miroshnichenko-6872175.jpg",
    },
    {
      title: "Engine Bay Detail",
      src: "/images/pexels-kampratt-8192663.jpg",
    },
    {
      title: "Dashboard Detail",
      src: "/images/IMG_8382-preview.png",
    },
    {
      title: "Floor Mat Wash",
      src: "/images/IMG_61F527D5E079-1.png",
    },
    {
      title: "Window Shine",
      src: "/images/IMG_8885-preview.png",
    },
    {
      title: "Paint Protection",
      src: "/images/IMG_8393.png",
    },
  ];

  return <FocusCards cards={cards} />;
}