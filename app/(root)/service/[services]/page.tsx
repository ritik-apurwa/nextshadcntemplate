"use client";

import { notFound } from "next/navigation";
import { Services } from "@/public";  // Make sure this path is correct
import ServiceCard from "@/components/Designs/ServiceDetails";
import { StaticImageData } from "next/image";  // Add this import

interface Props {
  params: {
    services: string;  // Changed from stitle to services to match the folder name
  };
}

export default function ServicePage({ params }: Props) {
  const { services } = params;

  if (!services) {
    notFound();
  }

  const formattedTitle = services.replace(/-/g, " ").toLowerCase();
  const routeProject = Services.find((c) => c.title.toLowerCase() === formattedTitle);

  if (!routeProject) {
    notFound();
  }

  return (
    <section>
      <div>
        <ServiceCard
          id={routeProject.id}
          image={routeProject.image}
          servicePoints={routeProject.servicePoints}
          title={routeProject.title}
          key={routeProject.id}
        />
      </div>
    </section>
  );
}