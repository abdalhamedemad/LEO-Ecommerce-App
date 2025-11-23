"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CartModal } from "./CartComponents/CartModal";

export const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  // temp
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) router.push("/login");
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        alt="Profile"
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgba(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        alt="notification"
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
        <Image
          src="/cart.png"
          width={22}
          height={22}
          alt="cart"
          className="cursor-pointer"
          onClick={() => setCartOpen((prev) => !prev)}
        />
        <span className="absolute -top-4 -right-4 w-6 h-6 bg-lightRed rounded-full flex items-center justify-center text-white text-sm">
          2
        </span>
      </div>
      {cartOpen && <CartModal />}
    </div>
  );
};
