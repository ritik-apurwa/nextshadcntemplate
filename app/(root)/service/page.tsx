import ServiceCard from "@/components/Designs/ServiceDetails";
import { ServiceDetailsInterface, Services } from "@/public";
import React from "react";

const page = () => {
  return (
    <section>
      {Services.map(
        ({ id, image, servicePoints, title }: ServiceDetailsInterface) => {
          return (
            <ServiceCard
              id={id}
              image={image}
              servicePoints={servicePoints}
              title={title}
              key={id}
            />
          );
        }
      )}
    </section>
  );
};

export default page;
