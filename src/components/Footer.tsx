import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-50 text-amber-800 ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-amber-700 hover:text-amber-600 transition-colors duration-200 mt-6"
        >
          MASSIMO
        </Link>

        {/* Copyright */}
        <p className="text-xs text-amber-700 text-center md:text-right mt-6">
          © {new Date().getFullYear()} MASSIMO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
