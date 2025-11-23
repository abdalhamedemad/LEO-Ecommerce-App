"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      router.push(`/list?name=${searchValue}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 outline-none bg-transparent"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className=" cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
};
