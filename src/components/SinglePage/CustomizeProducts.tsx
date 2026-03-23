import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a Color</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full bg-red-500 cursor-pointer ring-1 ring-gray-300 relative">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
        <li className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer ring-1 ring-gray-300 relative"></li>
        <li className="w-8 h-8 rounded-full bg-green-500 cursor-not-allowed ring-1 ring-gray-300 relative">
          <div className="absolute w-[2px] h-10 bg-red-400 -rotate-45 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li>
          <button className="px-4 py-1 text-sm bg-pink-200 text-white rounded-md  ring-1 ring-pink-200 cursor-not-allowed ">
            Small
          </button>
        </li>
        <li>
          <button className="px-4 py-1 text-sm text-lightRed bg-white rounded-md  ring-1 ring-lightRed ">
            Medium
          </button>
        </li>
        <li>
          <button className="px-4 py-1 text-sm bg-lightRed text-white rounded-md  ring-1 ring-lightRed  ">
            Large
          </button>
        </li>
      </ul>
    </div>
  );
};
export default CustomizeProducts;
