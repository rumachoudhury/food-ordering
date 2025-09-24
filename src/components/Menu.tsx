"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 2, title: "Contact", url: "/" },
];

function Menu() {
  const [open, setOpen] = useState(false);

  const user = false; //temporary
  return (
    <div className="cursor-pointer">
      {!open ? (
        <Image
          src="/foodOrdering/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/foodOrdering/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}

      {open && (
        <div className="bg-amber-500 text-white absolute left-0 top24 w-full h-[calc(100vh-6rem)] flex flex-col gap-6 items-center justify-center text-3xl z-10 mt-6">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/OrderPage" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}

          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Menu;
