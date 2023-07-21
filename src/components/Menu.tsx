'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './CartIcon';

const links = [
  { id: 1, title: 'Homepage', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Working House', url: '/working-house' },
  { id: 4, title: 'Contact', url: '/contact' },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //! Del
  const user = false;

  return (
    <div>
      <Image
        src={!open ? '/open.png' : '/close.png'}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center text-3xl flex-col gap-8 w-full z-10">
          {links.map(({ id, title, url }) => (
            <Link href={url} key={id} onClick={() => setOpen(false)}>
              {title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
