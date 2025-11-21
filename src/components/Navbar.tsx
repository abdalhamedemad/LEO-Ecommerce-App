import React from "react";
import Link from "next/link";
import { Menu } from "./Menu";
export const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:64 relative">
      {/* mobile */}
      <div className="h-full flex items-center justify-between">
        <Link href="/">
          {/* tracking-wide means letter spacing */}
          <div className="text-2xl tracking-wide">LEO</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger Screens */}
    </div>
  );
};
