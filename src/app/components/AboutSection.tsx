"use client";
import React, { useTransition, useState } from "react";
import { TabButton } from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
    {
      title: "Habilidades",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
        </ul>
      ),
    },
    {
      title: "Educación",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Tecnicatura Universitaria en Programación - UTN</li>
        </ul>
      ),
    },
    {
      title: "Certificaciones",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>Full Stack Developer - Henry</li>
          <li>Desarrollo Web - Coderhouse</li>
        </ul>
      ),
    },
  ];

export const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id: string) => {
      startTransition(() => {
        setTab(id);
      });
    };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime rem iste, voluptate tempora laudantium dolore, nostrum voluptas omnis hic cupiditate accusantium officiis impedit nesciunt autem amet asperiores. Enim, facilis recusandae.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educación{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaciones{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};