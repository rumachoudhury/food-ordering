import Link from "next/link";
import React from "react";

export const menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/foodOrdering/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/foodOrdering/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/foodOrdering/m3.png",
    color: "white",
  },
];

function MenuPage() {
  return (
    <div className="p-4 py-20 md:py-30  xl:px-40 min-h-screen flex flex-col md:flex-row gap-6">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="relative w-full md:w-1/2 lg:w-1/3 h-80 md:h-96 rounded-xl overflow-hidden flex flex-col justify-end p-4  border-2 border-amber-500 shadow-red-400 shadow-lg"
          style={{
            backgroundImage: `url(${category.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={`${
              category.color === "white" ? "text-white" : "text-black"
            } p-4 rounded`}
          >
            <h1 className="uppercase font-bold mb-2">{category.title}</h1>
            <p className="text-sm my-6">{category.desc}</p>
            <button className="hidden md:block bg-amber-500 text-white py-2 px-4 rounded-md">
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MenuPage;
