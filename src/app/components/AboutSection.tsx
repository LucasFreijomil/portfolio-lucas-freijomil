"use client";
import React, { useTransition, useState } from "react";
import { TabButton } from "./TabButton";
import Image from "next/image";
import { motion } from "framer-motion";

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
        <li>Tecnicatura Universitaria en Programación (en curso) - UTN</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Bootcamp Full Stack Developer - Henry</li>
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
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/about-image-2.jpeg"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-base lg:text-lg">
            Gracias a mi background sólido en el rubro automotriz y mi experiencia en proyectos web grupales, poseo habilidades sociales que me permiten desenvolverme con facilidad con todo tipo de clientes y trabajando en equipo tales como capacidad de negociación, escucha activa y empatía, que me permiten llegar a acuerdos satisfactorios incluso en entornos difíciles y encontrar soluciones creativas que equilibren las necesidades de todos. Siempre priorizo el compañerismo y la comunicación para generar el entorno más positivo posible.
          </p>
          <div className="flex flex-row justify-start mt-8 text-sm sm:text-lg">
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
      </motion.div>
    </section>
  );
};
