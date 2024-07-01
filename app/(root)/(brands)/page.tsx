import BrandCard from "@/components/Designs/BrandCard";
import { Brand, brands } from "@/public";
import React from "react";

const page = () => {
  return (
    <section>
      {brands.map(
        ({
          brandBgImage,
          brandName,
          brandServiceDetails,
          brandServicePara,
          brandServices,
          id,
        }: Brand) => (
          <BrandCard
            brandBgImage={brandBgImage}
            brandName={brandName}
            brandServiceDetails={brandServiceDetails}
            brandServicePara={brandServicePara}
            brandServices={brandServices}
            key={id}
            id={id}
          />
        )
      )}
    </section>
  );
};

export default page;
