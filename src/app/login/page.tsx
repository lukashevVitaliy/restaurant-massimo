import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] items-center justify-center p-4 md:h-[calc(100vh-9rem)]">
      {/* BOX */}
      <div className="flex h-full flex-col rounded-md shadow-2xl md:h-[70%] md:w-full md:flex-row lg:w-[60%] 2xl:w-[1/2]">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="flex flex-col gap-8 p-10 md:w-1/2">
          <h1 className="text-xl font-bold xl:text-3xl">Welcome</h1>
          <p className="">
            Log into your account or create a new one using social buttons
          </p>
          <button className="flex gap-4 rounded-md p-4 ring-1 ring-orange-100">
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Sign in with Google</span>
          </button>
          <button className="flex gap-4 rounded-md p-4 ring-1 ring-blue-100">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/contact">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
