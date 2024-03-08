"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/public/pic.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/public/pic.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/public/pic.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/public/pic.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/public/pic.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/public/pic.png",
  },
];
