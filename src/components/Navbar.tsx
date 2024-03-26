"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { GiRapidshareArrow } from "react-icons/gi";
import { GiReturnArrow } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/profile", label: "Dashboard" },
  ];

  return (
    <>
      <header className="sm:px-8 px-4 py-5 w-full fixed black-morphism z-[1000]">
        <nav className="flex justify-between items-center max-container">
          <Link href="/" className="text-3xl font-bold">
            Moonfield
          </Link>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="leading-normal text-lg  group relative dark:text-white/[0.7] dark:hover:text-white transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-1 dark:bg-white origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 text-lg leading-normal font-medium max-lg:hidden wide:mr-24 rounded-lg cursor-pointer ">
            <Link href="/login" className="">
              <div className="flex justify-center text-center">
                <HoverBorderGradient
                  containerClassName="rounded-2xl"
                  as="button"
                  className="bg-black text-white flex items-center space-x-2"
                >
                  <span className="">Login</span>
                  <GiRapidshareArrow className=""/>
                </HoverBorderGradient>
              </div>
            </Link>
          </div>

          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto dark:bg-white  text-black">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="dark:border-white border border-b-2 leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
