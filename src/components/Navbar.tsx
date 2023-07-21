// server component

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CartIcon from './CartIcon';
import Menu from './Menu';

const Navbar = () => {
  const user = false;

  return (
    <div className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="flex-1 text-xl md:text-center md:font-bold">
        <Link href="/">Massimo</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="right-2 top-2 flex cursor-pointer items-center gap-1 rounded-md bg-red-500 px-1 text-white md:absolute xl:static">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span className="p-2 text-xs">+1(111) 111-11-11</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
