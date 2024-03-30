"use client";
import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import spotify from "../../public/spotify.png";
import yash from "../../public/Yash harale.jpg";
import discord from "../../public/discord.png";
import dalle from "../../public/dalle.png";
import amazon from "../../public/amazon.png";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandTailwind } from "react-icons/tb";

interface Project {
  id: number;
  title: string;
  desc: string;
  imageSrc: StaticImageData;
  profile: StaticImageData;
  tags: Tag[];
}

interface Tag {
  name: string;
  color: string;
  logo?: JSX.Element;
}

export default function ProjectHero() {
  const [bookmark, setBookmark] = useState(false);

  const project: Project[] = [
    {
      id: 1,
      title: "Spotify Clone",
      desc: "Building a Spotify clone involves a comprehensive approach spanning both frontend and backend development. On the frontend, developers design an intuitive user interface using modern frameworks like React.js or Vue.js, ensuring seamless navigation and a visually appealing layout reminiscent of Spotify's design language. Features such as user authentication, music playback controls, search functionality, and playlist management are meticulously implemented to provide a rich user experience.",
      imageSrc: spotify,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "mern",
          color: "blue-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
          logo: <TbBrandTailwind />,
        },
      ],
    },
    {
      id: 2,
      title: "Discord Clone",
      desc: "Developing a Discord clone entails crafting a real-time chat application with functionalities resembling Discord's messaging, voice chat, and community features. Leveraging technologies like React.js for the frontend, Node.js for the backend, and WebSocket protocols for real-time communication, developers embark on an ambitious journey to replicate Discord's immersive experience.",
      imageSrc: discord,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "mern",
          color: "blue-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
          logo: <TbBrandTailwind />,
        },
      ],
    },
    {
      id: 3,
      title: "Dalle Clone",
      desc: "Creating a DALL-E clone involves developing a sophisticated AI model capable of generating images from textual descriptions, akin to OpenAI's DALL-E. While replicating the exact functionality of DALL-E is an immense undertaking, developers can embark on this endeavor using cutting-edge machine learning frameworks and techniques. First and foremost, the backbone of a DALL-E clone lies in the neural network architecture. Utilizing deep learning frameworks like TensorFlow or PyTorch, developers design and train a generative model capable of understanding textual input and generating corresponding images. This model may be based on architectures such as GANs (Generative Adversarial Networks) or VAEs (Variational Autoencoders), tailored to the specifics of image generation from textual prompts.",
      imageSrc: dalle,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "mern",
          color: "blue-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
          logo: <TbBrandTailwind />,
        },
      ],
    },
    {
      id: 4,
      title: "Amazon Clone",
      desc: "Building an Amazon clone using the MERN stack with Tailwind CSS involves a comprehensive approach across both frontend and backend development. On the backend, MongoDB serves as the primary database, managed through Express.js APIs. These APIs handle core functionalities such as user authentication, product management, and order processing. User authentication is pivotal, encompassing features like sign-up, login, and secure session management, often implemented with JWT tokens. Additionally, order management functionalities, including cart handling and order history, are crucial backend components.",
      imageSrc: amazon,
      profile: yash,
      tags: [
        {
          name: "typescript",
          color: "purple-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "mern",
          color: "blue-text-gradient",
          logo: <TbBrandTypescript />,
        },
        {
          name: "tailwind",
          color: "orange-text-gradient",
          logo: <TbBrandTailwind />,
        },
      ],
    },
  ];

  return (
    <div className="projects h-full">
      <div className="py-24">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 mx-10">
          {project.map((project) => (
            <div key={project.id}>
              <CardContainer className="inter-var" key={project.id}>
                <CardBody className="relative group/card bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-white/20 shadow-card ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={project.imageSrc}
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="image not found :("
                    />
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white mt-4 flex items-center w-full justify-between"
                  >
                    <div className="gap-2 flex items-center w-[90%]">
                      <Image
                        src={project.profile}
                        width="32"
                        height="32"
                        className="object-contain rounded-full object-center group-hover/card:shadow-xl top-2 left-2 p-1 ring-white ring-offset-transparent ring-2 cursor-pointer"
                        alt="image not found :("
                      />
                      <h1 className="truncate">{project.title}</h1>
                    </div>
                    {/* <Image src={yash} alt="" width="32" height="32" className=""/> */}
                    {bookmark ? (
                      <FaBookmark onClick={() => setBookmark(!bookmark)} className="cursor-pointer"/>
                    ) : (
                      <FaRegBookmark
                        className="cursor-pointer"
                        onClick={() => setBookmark(!bookmark)}
                      />
                    )}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="40"
                    className="text-neutral-500 text-sm max-w-sm mt-5 dark:text-neutral-300"
                  >
                    <p className="line-clamp-6">{project.desc}</p>
                  </CardItem>
                  <div className="flex justify-between items-center mt-10">
                    <CardItem
                      translateZ={50}
                      as="p"
                      className="py-2 rounded-xl text-xs font-normal flex gap-2"
                    >
                      {project.tags.map((tag) => (
                        <p
                          key={`${tag.name}`}
                          className={`text-base font-semibold ${tag.color}`}
                        >
                          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded cursor-pointer shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
                            {tag.logo} {tag.name}
                          </div>
                        </p>
                      ))}
                    </CardItem>
                    <CardItem
                      translateZ={60}
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
