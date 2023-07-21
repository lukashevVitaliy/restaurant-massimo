'use client';

import React, { useEffect, useState } from 'react';

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ id, price, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map(({ title, additionalPrice }, i) => (
          <button
            key={title}
            className="min-w-[6rem] rounded-md p-2 ring-1 ring-red-400"
            style={{
              background: selected === i ? 'rgb(248 113 113)' : 'white',
              color: selected === i ? 'white' : 'red',
            }}
            onClick={() => setSelected(i)}
          >
            {title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex items-center justify-between rounded-md ring-1 ring-red-500">
        {/* QUANTITY */}
        <div className="flex w-full justify-between p-3">
          <span>Quantity</span>
          <div className="flex items-center gap-4">
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span>{quantity}</span>
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="w-56 rounded-r-md bg-red-500 p-3 uppercase text-white ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
