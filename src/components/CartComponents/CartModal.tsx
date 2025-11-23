import React from "react";
import Image from "next/image";

export const CartModal = () => {
  const cartItems = true; // temp
  return (
    <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20 bg-white top-12 right-0 flex flex-col gap-6 w-max">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <div>
          <h2 className="text-xl mb-4">Shopping Cart</h2>
          {/* // cart Item */}
          <ul className="flex flex-col gap-8">
            <li className="flex gap-4">
              {/* next does not allow to use images from external sources without configuration you need to add the domain in next.config.js file */}
              <Image
                src="https://images.pexels.com/photos/33827168/pexels-photo-33827168.jpeg"
                alt="Cart"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col w-full justify-between">
                {/* TOP */}
                <div className="flex items-center justify-between gap-8">
                  {/* Title */}
                  <h3 className=" font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* description */}
                <div className="text-sm text-gray-500">available</div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500 cursor-pointer hover:underline">
                    Remove
                  </span>
                </div>
              </div>
            </li>
            <li className="flex gap-4">
              {/* next does not allow to use images from external sources without configuration you need to add the domain in next.config.js file */}

              <Image
                src="https://images.pexels.com/photos/33827168/pexels-photo-33827168.jpeg"
                alt="Cart"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />

              <div className="flex flex-col w-full justify-between">
                {/* TOP */}
                <div className="flex items-center justify-between gap-8">
                  {/* Title */}
                  <h3 className=" font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* description */}
                <div className="text-sm text-gray-500">available</div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500 cursor-pointer hover:underline">
                    Remove
                  </span>
                </div>
              </div>
            </li>
          </ul>
          <div className="border-t mt-4 pt-4">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$200</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="px-4 py-3 ring-1 ring-gray-300 rounded-md hover:bg-gray-100 ">
                View Cart
              </button>
              <button className="px-4 py-3 bg-black text-white rounded-md hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
