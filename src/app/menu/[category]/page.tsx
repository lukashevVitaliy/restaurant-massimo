import { pizzas } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map(({ id, title, desc, img, price, options }) => (
        <Link
          className="group flex h-[60vh] w-full flex-col justify-between border-b-2 border-r-2 border-red-500 p-4 even:bg-fuchsia-50 sm:w-1/2 lg:w-1/3"
          href={`/product/${id}`}
          key={id}
        >
          {/* IMAGE CONTAINER */}
          {img && (
            <div className="relative h-[80%]">
              <Image src={img} alt={title} fill className="object-contain" />
            </div>
          )}

          {/* TEXT CONTAINER */}
          <div className=" flex items-center justify-between font-bold">
            <h1 className=" p-2 text-xl uppercase sm:text-xl">{title}</h1>
            <h2 className="group-hover:hidden">${price}</h2>
            <button className="hidden rounded-md bg-red-500 p-2 text-sm uppercase text-white group-hover:block">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
