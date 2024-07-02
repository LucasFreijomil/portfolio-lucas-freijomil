"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [copyMail, setCopyMail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("lucasfreijomil@gmail.com");
      setCopyMail(true);
      setTimeout(() => setCopyMail(false), 2000);
      console.log("Dirección de correo electrónico copiada al portapapeles");
    } catch (err) {
      console.error("Error al copiar al portapapeles:", err);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 bg-[#181818] w-full "
    >
      <div className="flex flex-col items-center px-12">
        <h5 className="text-2xl font-bold  text-white my-2">Conectemos !</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Si tu equipo necesita a alguien que contribuya a sus proyectos con
          pasión, dedicación y un espíritu colaborativo, te invito a que me
          contactes. Estaré encantado de coordinar una entrevista donde podamos
          conversar sobre cómo mis habilidades técnicas, mi experiencia en la
          resolución de problemas y mi compromiso con el compañerismo pueden
          sumar valor a tu organización!
        </p>
      </div>
      <div className="socials flex flex-row gap-2 justify-center items-center">
        <Link href="https://github.com/LucasFreijomil">
          <Image
            src={GithubIcon}
            alt="Github Icon"
            className="md:size-[100px] hover:scale-125 active:scale-110 active:opacity-50 duration-300"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/lucasfreijomil/">
          <Image
            src={LinkedinIcon}
            alt="Linkedin Icon"
            className="md:size-[100px] hover:scale-125 active:scale-110 active:opacity-50 duration-300"
          />
        </Link>
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={handleCopyEmail}
        >
          <Image
            src={MailIcon}
            alt="Mail Icon"
            className="size-[40px] md:size-[80px] ml-[5px] md:ml-[5px]  hover:scale-125 active:scale-110 active:opacity-50 duration-300"
          />
        </div>
      </div>
      {copyMail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="md:col-start-2 font-semibold text-center text-white"
        >
          Mail copiado!
        </motion.div>
      )}
    </section>
  );
};
