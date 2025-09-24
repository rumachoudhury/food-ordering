import Image from "next/image";
import React from "react";
import CountDownClock from "./CountDownClock";

function Offer() {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row ">
      {/* text container */}
      <div className="flex-1 flex flex-col justify-center gap-6 p-10 md:p-20">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDownClock />
        <div>
          <button className="bg-amber-500 text-white rounded-md py-3 px-6">
            Order Now
          </button>
        </div>
      </div>

      {/* image container */}
      <div className="flex-1 w-full relative">
        <Image
          src="/foodOrdering/offerProduct.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default Offer;
