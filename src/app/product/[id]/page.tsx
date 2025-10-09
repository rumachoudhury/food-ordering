import { singleProduct } from "../../../dataType";
import Image from "next/image";
import React from "react";
import Price from "../../../components/Price";

function SinguleProductPage() {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-amber-500 md:flex-row md:items-center gap-4 pb-24">
      {/* image container */}
      {singleProduct.img && (
        <div className="relative w-full h-1/2 md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title || "Product image"}
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* text container */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-4xl font-bold uppercase xl:text-5xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>

        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
}

export default SinguleProductPage;
