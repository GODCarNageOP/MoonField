"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import pic from "../../public/pic.png";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import github from "../../public/github.png";

export function ThreeDCardDemo() {
  const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;
  return (
    <CardContainer className="inter-var">
      <CardBody className="black-morphism relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-card">
        <CardItem translateZ="100" className="w-full relative">
          <Image
            src={pic}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem className="absolute inset-0 flex m-10" translateZ="130">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Image
              src={github}
              alt="github"
              className="object-contain p-1"
              width={50}
              height={50}
            />
          </div>
        </CardItem>
        <CardItem className="absolute inset-0 flex ml-[400px] mt-10" translateZ="130">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Image
              src={github}
              alt="github"
              className="object-contain p-1"
              width={50}
              height={50}
            />
          </div>
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <TextGenerateEffect words={words} />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Contribute
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
