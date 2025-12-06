import React from "react";
import Link from "next/link";
import Image from "next/image";
export const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* Top */}
      <div className="flex flex-col md:flex-row  justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">LEO</div>
          </Link>
          <p className="font-semibold">123 Main St, Anytown USA </p>
          <p className="font-semibold">info@leo.com</p>
          <p>+1 234 567 890</p>
          {/* Icons Container */}
          <div className="flex gap-6 ">
            <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
            />
            <Image src="/youtube.png" alt="youtube" width={16} height={16} />
            <Image
              src="/pinterest.png"
              alt="pinterest"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="x" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className=" font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/affiliates">Affiliates</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/press">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className=" font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Best Sellers</Link>
              <Link href="/">Discounts</Link>
              <Link href="/">Gift Cards</Link>
              <Link href="/">Special Offers</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className=" font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/support">Customer Service</Link>
              <Link href="/MyAccount">My Account</Link>
              <Link href="/FindAStore">Find a Store</Link>
              <Link href="/legal">Legal & Privacy</Link>
              <Link href="/FAQ">FAQ</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to know about new products and exclusive offers.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 w-3/4 "
              name=""
              id=""
            />
            <button className="w-1/4 bg-lightRed text-white ">JOIN</button>
          </div>
          <span className="font-medium text-lg">Secure Payment</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="discover" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="Visa" width={40} height={20} />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>© 2024 LEO. All rights reserved.</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};
