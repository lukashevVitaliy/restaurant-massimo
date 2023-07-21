import React from 'react';

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-50 text-sm md:text-base">
            <td className="hidden px-1 py-6 md:block">123456789</td>
            <td className="px-1 py-6">19.07.2023</td>
            <td className="px-1 py-6">89.90</td>
            <td className="hidden px-1 py-6 md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm odd:bg-gray-100 md:text-base">
            <td className="hidden px-1 py-6 md:block">123456789</td>
            <td className="px-1 py-6">19.07.2023</td>
            <td className="px-1 py-6">89.90</td>
            <td className="hidden px-1 py-6 md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm odd:bg-gray-100 md:text-base">
            <td className="hidden px-1 py-6 md:block">123456789</td>
            <td className="px-1 py-6">19.07.2023</td>
            <td className="px-1 py-6">89.90</td>
            <td className="hidden px-1 py-6 md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
