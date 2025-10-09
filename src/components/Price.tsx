"use client";

import { useState, useEffect } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};
function Price({ price, id, options }: Props) {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* option continer */}
      <div className="flex gap-4 ">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] p-2 px-3 ring-1 ring-amber-500 rounded-md"
            style={{
              background: selected === index ? "#FE9900" : "white",
              color: selected === index ? "white" : "amber",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity & buttton container */}
      <div className="flex justify-between items-center gap-4 ">
        {/* <div className="flex justify-between w-full p-2 ring-1 ring-amber-500 rounded-md ">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="cursor-pointer"
            >
              {"<"}
            </button>
            <span>1</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
              className="cursor-pointer"
            >
              {">"}
            </button>
          </div>
        </div> */}
        <div className="flex justify-between w-full p-3 ring-1 ring-amber-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        <button className=" uppercase min-w-[8rem] p-2 ring-1 ring-amber-400 rounded-md bg-amber-500 text-white ">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Price;
