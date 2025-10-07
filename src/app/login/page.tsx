import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* BOX */}
      <div className="flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden w-full max-w-5xl h-[90vh]">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-1/2 md:h-auto md:w-1/2">
          <Image
            src="/foodOrdering/loginBg.png"
            alt="Login Background"
            fill
            className="object-cover"
          />
        </div>

        {/* FORM CONTAINER */}
        <div className="p-8 md:p-10 flex flex-col justify-center w-full md:w-1/2 gap-6 bg-white">
          <h1 className="text-2xl xl:text-3xl font-bold">Welcome</h1>
          <p className="text-gray-600">
            Log into your account or create a new one using social buttons
          </p>

          <button className="flex items-center gap-4 p-3 ring-1 ring-orange-100 rounded-md hover:bg-orange-50 transition">
            <Image
              src="/foodOrdering/google.png"
              alt="Google"
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>

          <button className="flex items-center gap-4 p-3 ring-1 ring-blue-100 rounded-md hover:bg-blue-50 transition">
            <Image
              src="/foodOrdering/facebook.png"
              alt="Facebook"
              width={24}
              height={24}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Have a problem?
            <Link className="underline ml-1  cursor-pointer" href="/">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
