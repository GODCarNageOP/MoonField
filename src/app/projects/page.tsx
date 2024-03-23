import { ThreeDCardDemo } from "@/components/Cards";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import spotify from "../../../public/spotify.png";
import yash from "../../../public/Yash harale.jpg";
import discord from "../../../public/discord.png";
import dalle from "../../../public/dalle.png";
import amazon from "../../../public/amazon.png";

export default function Projects() {
  const project = [
    {
      id: 1,
      imageSrc: spotify,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      id: 2,
      imageSrc: discord,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      id: 3,
      imageSrc: dalle,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      id: 4,
      imageSrc: amazon,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "mern",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
  ];

  return (
    <div className="projects h-full">
      <div className="py-24">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-10">
          {project.map((project) => (
            <div key={project.id}>
              <CardContainer className="inter-var" key={project.id}>
                <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-card ">
                  <CardItem translateZ="80" className="w-full">
                    <Image
                      src={project.imageSrc}
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4 flex gap-2 items-center cursor-pointer"
                  >
                    <Image
                      src={project.profile}
                      width="32"
                      height="32"
                      className="object-contain rounded-full object-center group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                    GODCarNageOP
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    Hover over this card to unleash the power of CSS perspective
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={40}
                      as="button"
                      className="py-2 rounded-xl text-xs font-normal dark:text-white flex gap-2"
                    >
                     
                        {project.tags.map((tag) => (
                          <p
                            key={`${tag.name}`}
                            className={`text-base flex ${tag.color}`}
                          >
                            #{tag.name}
                          </p>
                        ))}
                     
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
