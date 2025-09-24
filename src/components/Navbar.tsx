import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

function Navbar() {
  const user = false;
  return (
    <div className="h-12 text-amber-500 p-4 flex items-center justify-between border-b-2 border-b-amber-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* middle links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center text-amber-600">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile Menue */}
      <div>
        <Menu />
      </div>

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-amber-700 px-1 rounded-md">
          <Image src="/foodOrdering/phone.png" alt="" width={25} height={25} />
          <span className="text-white">123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/OrderPage">Order</Link>
        )}

        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
