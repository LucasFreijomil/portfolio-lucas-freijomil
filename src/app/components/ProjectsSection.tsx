"use client";
import React, { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Juego de Reflejos",
    description: "El juego consiste esencialmente en medir el tiempo de respuesta o reflejos del usuario.",
    image: "/images/projects/juego_reflejos.png",
    gitUrl: "https://github.com/LucasFreijomil/Juego-de-reflejos",
    previewUrl: "",
  },{
    id: 2,
    title: "Juego Adivinar Pokemon",
    description: "Un juego simple que se basa en adivinar el Pokemon correcto detrás de la silueta. Si el Pokemon es descubierto, se revela su figura y se suma un punto de acierto. En caso de errarle, se suma un punto de error y se deberá volver a intentar.",
    image: "/images/projects/1.jpeg",
    gitUrl: "https://github.com/LucasFreijomil/Juego-Adivinar-Pokemon",
    previewUrl: "https://juego-adivinar-pokemon.vercel.app",
  },
  {
    id: 3,
    title: "Visit App",
    description: "Una solución orientada a barrios privados para gestionar el control de visitas y eventos (prototipo realizado en grupo).",
    image: "/images/projects/visit_app.png",
    gitUrl: "https://github.com/LucasFreijomil/VisitAPP",
    previewUrl: "",
  },
  {
    id: 4,
    title: "Get Fit",
    description: "Proyecto grupal realizado en el bootcamp Full-Stack Henry. Un ecommerce destinado a la venta de suplementos, artículos e indumentaria deportiva.",
    image: "/images/projects/get_fit.png",
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "SPA Videojuegos",
    description: "Una página web donde se puede ver un amplio catálogo de videojuegos de todas las épocas y géneros. Esta web consume la api de RAWG, con más de 500.000 videojuegos.",
    image: "/images/projects/pi_videojuegos.png",
    gitUrl: "https://github.com/LucasFreijomil/pi-videogames",
    previewUrl: "",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
