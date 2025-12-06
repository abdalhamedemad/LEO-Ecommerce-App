import React from "react";

export const Filter = () => {
  return (
    <div>
      <div className="mt-12 flex justify-between ">
        <div className="flex gap-6 flex-wrap">
          <select
            name="type"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          >
            <option value="type">Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
          <input
            type="text"
            name="min"
            placeholder="min price"
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          />
          <input
            type="text"
            name="max"
            placeholder="max price"
            className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          />
          <select
            name="size"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          >
            <option value="type">Size</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
          <select
            name="color"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          >
            <option value="type">Color</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
          <select
            name="type"
            id=""
            className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
          >
            <option value="type">Type</option>
            <option value="physical">Physical</option>
            <option value="digital">Digital</option>
          </select>
        </div>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400 h-max"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};
