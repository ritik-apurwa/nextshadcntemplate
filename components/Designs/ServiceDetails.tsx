// ServiceDetail.tsx

"use client"
import React from "react";
import { FiArrowLeft } from "react-icons/fi"; // Example: using Feather Icons
import MotionDiv from "./MotionDiv";
import Image from "next/image";
import { ServiceDetailsInterface } from "@/public";
import Link from "next/link";

export const ServiceCard = ({
  id,
  image,
  servicePoints,
  title,
}: ServiceDetailsInterface) => {
  return (
    <MotionDiv initial="hidden" animate="visible" variants={variants}>
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-lg ">
            <Image
              src={image}
              alt={title}
              height={400}
              width={400}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <ul className="list-disc list-inside">
              {servicePoints.map((point, index) => (
                <li key={index} className="text-gray-700 mb-2">
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center w-1/2 mb-4">
              <Link
                href="/#services"
                className="border-2 w-full py-3  justify-center  flex flex-row items-center"
              >
                <FiArrowLeft className="mr-2" />
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

// Animation variants for Framer Motion
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default ServiceCard;
