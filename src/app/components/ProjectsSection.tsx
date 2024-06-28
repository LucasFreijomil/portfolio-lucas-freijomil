"use client";
import React from "react";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";

const projectsData = [
    {
      id: 1,
      title: "Ejemplo 1",
      description: "Project 1 description",
      image: "/images/projects/1.png",
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "Ejemplo 2",
      description: "Project 2 description",
      image: "/images/projects/2.png",
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Ejemplo 3",
      description: "Project 3 description",
      image: "/images/projects/3.png",
      gitUrl: "/",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "Ejemplo 4",
      description: "Project 4 description",
      image: "/images/projects/4.png",
      gitUrl: "/",
      previewUrl: "/",
    },
  ];

export const ProjectsSection = () => {

  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis Proyectos
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
      {projectsData.map((project) => (
        <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
      />
      ))}
      </div>
    </div>
  );
};
