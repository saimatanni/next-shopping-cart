"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, ShoppingBagIcon } from "lucide-react";
import { navigation } from "../constants/data";
import { signIn, useSession } from "next-auth/react";
export default function Navbar() {
  const pathName = usePathname();
  const { data: session } = useSession();
  return (
    <div
      className="w-full h-20 border-b-[1px] border-b-zinc-500
     bg-white text-zinc-600 sticky top-0 z-50 bg-white/80 backdrop-blur-2xl"
    >
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between   px-4 xl-px-0">
        {/* Logo */}
        <Logo />
        {/* navigation */}
        <ul className=" hidden md:flex items-center gap-5 text-sm uppercase font-semibold ">
          {navigation.map((item) => (
            <Link href={item.href} key={item.id}>
              <li
                className={`hover:text-black cursor-pointer duration-200 relative overflow-hidden group ${
                  item.href === pathName && "text-designColor"
                }`}
              >
                {item.title}
                <span
                  className={`absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 ${
                    item.href === pathName && "translate-x-0 bg-designColor"
                  }`}
                />
              </li>
            </Link>
          ))}
        </ul>
        {/* icons  */}

        <div className="flex justify-center  gap-x-5">
          <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            {" "}
            <Heart className="w-7 h-7" />
            <span className="absolute top-0  bg-zinc-800 text-zinc-200  rounded-full w-4 h-4 text-xs flex item-center justify-center group-hover:bg-black font-semibold group-hover:text-white ">
              0
            </span>
          </Link>
          <Link
            href={"/wishlist"}
            className="hover:text-black cursor-pointer duration-200 relative group"
          >
            {" "}
            <ShoppingBagIcon className="w-7 h-7" />
            <span className="absolute top-0  bg-zinc-800 text-zinc-200  rounded-full w-4 h-4 text-xs flex item-center justify-center group-hover:bg-black font-semibold group-hover:text-white ">
              0
            </span>
          </Link>

          {session ? (
            <Link
              href="/profile"
              className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold "
            >
              Profile
              <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 " />
            </Link>
          ) : (
            <button
              onClick={() => signIn()}
              className="hover:text-black cursor-pointer duration-200 relative overflow-hidden group text-sm uppercase font-semibold "
            >
              Login
              <span className="absolute h-[1px] w-full bg-blue-700 left-0 bottom-0 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
