import Image from "next/image";
import React from "react";
import CountDownClock from "./CountDownClock";

function Offer() {
  return (
    <div
      className="
        flex flex-col lg:flex-row justify-between
        bg-[url('/foodOrdering/offerBg.png')] bg-cover bg-center
        min-h-screen md:min-h-[70vh] lg:min-h-[60vh]
        px-6 sm:px-10 md:px-20
      "
    >
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center gap-6 py-10 sm:py-16">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
          Delicious Burger &amp; French Fry
        </h1>
        <p className="text-white text-base sm:text-lg xl:text-xl max-w-prose">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDownClock />
        <div>
          <button
            className="
              bg-amber-500 text-white rounded-md
              py-2 px-6 sm:py-3 sm:px-8
              hover:bg-amber-600 transition
            "
          >
            Order Now
          </button>
        </div>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative w-full min-h-[40vh] lg:min-h-full">
        <Image
          src="/foodOrdering/offerProduct.png"
          alt="Burger and French Fry"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}

export default Offer;
