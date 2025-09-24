"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Fresh from the oven—crispy, hot, unforgettable",
    image: "/foodOrdering/slide1.png",
  },
  {
    id: 2,
    title: "Fast delivery anywhere across New York City",
    image: "/foodOrdering/slide2.png",
  },
  {
    id: 3,
    title: "Perfect pies to enjoy with friends and family",
    image: "/foodOrdering/slide3.jpg",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className=" flex-1 flex items-center justify-center flex-col gap-6 text-amber-500 font-bold">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-amber-500 text-white px-3 py-2 rounded-md">
          Order Now
        </button>
      </div>
      <div className="  flex-1 relative top-8 ">
        <Image src={data[currentSlide].image} alt="" width={500} height={300} />
      </div>
    </div>
  );
}

export default Slider;
