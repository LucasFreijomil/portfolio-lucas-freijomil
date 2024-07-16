"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Link from "next/link";

export const HeroSection = () => {
  // const handleDownloadResume = () => {
  //   const resumeUrl = '/assets/cv-lucas-freijomil.pdf';

  //   const tempLink = document.createElement('a');
  //   tempLink.href = resumeUrl;
  //   tempLink.setAttribute('download', 'cv-lucas-freijomil.pdf');
  //   tempLink.style.display = 'none';

  //   document.body.appendChild(tempLink);

  //   tempLink.click();

  //   document.body.removeChild(tempLink);
  // };


  return (
    <section className="">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 gap-12 sm:grid-cols-12"
      >
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-5xl sm:text-6xl font-extrabold">
            {/* <span>Hola, soy </span> */}
            <TypeAnimation
              sequence={["Hola !", 500, "Mi nombre es Lucas Freijomil !", 500, "Soy Desarrollador Web Full-Stack", 500]}
              wrapper="span"
              speed={50}
              repeat={0}
            />
          </h1>
          <p className=" text-neutral-500 text-lg mb-6 lg:text-xl">
            Mi pasión por la tecnología me lleva a todo desarrollo priorizando buenas prácticas y prolijidad para garantizar la mejor terminación posible, pensando el software desde el lado del desarrollador para que el código sea escalable y mantenible, y desde el lado del usuario para transmitir la mayor comodidad posible en el uso del mismo.
          </p>
          <div className="flex flex-col sm:flex-row">
            <Link href={"#contact"}>
              <button className="text-white px-6 py-3 p-1 w-fit sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 border border-white hover:bg-white hover:text-black duration-300">
                Contacto
              </button>
            </Link>
            <button className=" p-1 w-fit sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#EEE600]" >
              <a href={"https://drive.google.com/file/d/10-QEYuxmoKgT6N0dGkdqxiUpeoUwn2ti/view?usp=sharing"} target="_blank" rel="noopener noreferrer" download="nombre_pretendido_del archivo.pdf">
              <span className="font-bold text-black text-xl relative z-10 group-hover:text-[#EEE600] duration-300">
                Descargar CV
              </span>
              </a>
              <span className="absolute top-0 left-0 w-full bg-[#EEE600] duration-300 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-[#EEE600] duration-300 group-hover:translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-[#EEE600] duration-300 delay-100 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-100 top-0 left-0 w-full bg-[#EEE600] duration-300 group-hover:translate-y-full h-full"></span>
            </button>
          </div>
        </div>
        <div className="col-span-7 mt-4 mb-4 lg:mt-0 lg:mb-0 sm:col-span-5 flex justify-center sm:block">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/Perfil.jpeg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              alt="lucas freijomil"
              width={300}
              height={300}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
