// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const data = [
//   {
//     id: 1,
//     title: "Fresh from the oven—crispy, hot, unforgettable",
//     image: "/foodOrdering/slide1.png",
//   },
//   {
//     id: 2,
//     title: "Fast delivery anywhere across New York City",
//     image: "/foodOrdering/slide2.png",
//   },
//   {
//     id: 3,
//     title: "Perfect pies to enjoy with friends and family",
//     image: "/foodOrdering/slide3.jpg",
//   },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () =>
//         setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
//       4000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
//       {/* TEXT CONTAINER */}
//       <div className="flex-1 flex items-center justify-center flex-col gap-8 text-amber-500 font-bold">
//         <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
//           {data[currentSlide].title}
//         </h1>
//         <button className="bg-amber-500 text-white py-4 px-8">Order Now</button>
//       </div>
//       {/* IMAGE CONTAINER */}
//       <div className="w-full flex-1 relative">
//         <Image
//           src={data[currentSlide].image}
//           alt=""
//           fill
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Slider;

// -----------------------
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

export default function Slider() {
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
    <div className="flex flex-col lg:flex-row min-h-screen bg-fuchsia-50">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center gap-8 text-amber-500 font-bold p-6 sm:p-10">
        <h1 className="text-3xl md:text-6xl xl:text-7xl text-center uppercase leading-tight">
          {data[currentSlide].title}
        </h1>
        <button className="bg-amber-500 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md hover:bg-amber-600 transition">
          Order Now
        </button>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative flex-1 w-full min-h-[40vh] lg:min-h-screen">
        <Image
          src={data[currentSlide].image}
          alt={data[currentSlide].title}
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
