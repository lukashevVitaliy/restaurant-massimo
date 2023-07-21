import { menu } from '@/data';
import Link from 'next/link';
import React from 'react';

const MenuPage = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col items-center p-4 md:h-[calc(100vh-9rem)] md:flex-row lg:px-20 xl:px-40 ">
      {menu.map(({ id, slug, title, desc, img, color }) => (
        <Link
          href={`/menu/${slug}`}
          key={id}
          className="h-1/3 w-full bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={`text-${color} w-1/2`}>
            <h1 className="text-3xl font-bold uppercase">{title}</h1>
            <p className="my-8 text-sm">{desc}</p>
            <button
              className={`hidden 2xl:block bg-${color} text-${
                color === 'black' ? 'white' : 'red-500'
              } rounded-md px-4 py-2`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
