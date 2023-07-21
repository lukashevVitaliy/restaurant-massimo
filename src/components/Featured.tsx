import Image from 'next/image';
import React from 'react';
import { featuredProducts } from '@/data';

const Featured = () => {
  return (
    <div className="w-full overflow-x-scroll text-red-500 ">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEMS */}
        {featuredProducts.map(({ id, price, title, desc, img, options }) => (
          <div
            key={id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={img} alt={title} fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 ">
              <h1 className="text-xl uppercase font-bold xl:text-2xl 2xl:text-3xl">
                {title}
              </h1>
              <p className="p-4 2xl:p-8">{desc}</p>
              <span className="text-xl font-bold">$ {price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
