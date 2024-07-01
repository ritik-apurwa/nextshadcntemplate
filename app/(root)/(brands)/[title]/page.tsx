"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { brands } from "@/public";
import BrandCard from "@/components/Designs/BrandCard";

interface Props {
  params: {
    title: string;
  };
}

export default function ProjectPage({ params }: Props) {
  const { title } = params;
  const formattedTitle = title.replace(/ /g, "-").toLowerCase();
  const routeProject = brands.find(
    (c) => c.brandName.toLowerCase() === formattedTitle
  );

  if (!routeProject) {
    notFound();
  }

  return (
    <section>
      <div>
        <BrandCard
          brandBgImage={routeProject.brandBgImage}
          brandName={routeProject.brandName}
          brandServiceDetails={routeProject.brandServiceDetails}
          brandServicePara={routeProject.brandServicePara}
          brandServices={routeProject.brandServices}
          id={routeProject.id}
        />
      </div>
    </section>
  );
}
