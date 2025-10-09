// import { featuredProducts } from "@/dataType";
// import Image from "next/image";
// import React from "react";

// const Featured = () => {
//   return (
//     <div className="w-screen overflow-x-scroll text-amber-500">
//       {/* WRAPPER */}
//       <div className="w-max flex">
//         {/* SINGLE ITEM */}
//         {featuredProducts.map((item) => (
//           <div
//             key={item.id}
//             className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
//           >
//             {/* IMAGE CONTAINER */}
//             {item.img && (
//               <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
//                 <Image src={item.img} alt="" fill className="object-contain" />
//               </div>
//             )}
//             {/* TEXT CONTAINER */}
//             <div className=" flex-1 flex flex-col items-center justify-center text-center gap-4 text-amber-500">
//               <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
//                 {item.title}
//               </h1>
//               <p className="p-4 2xl:p-8">{item.desc}</p>
//               <span className="text-xl font-bold">${item.price}</span>
//               <button className="bg-amber-500 text-white p-2 rounded-md">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;

// -----------------------
import { featuredProducts } from "../dataType";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-full text-amber-500">
      {/* WRAPPER */}
      <div
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 p-4
          md:grid md:grid-cols-2 md:gap-6 md:overflow-visible
          xl:grid-cols-3
        "
      >
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="
              min-w-[80%] snap-center flex flex-col items-center justify-between
              bg-white rounded-xl shadow-md
              transition-all duration-300 hover:bg-fuchsia-50
              md:min-w-0 md:w-full md:h-auto
            "
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative w-full aspect-square hover:rotate-[60deg] transition-transform duration-500">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-center text-center gap-3 p-4 sm:p-6">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold uppercase">
                {item.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
