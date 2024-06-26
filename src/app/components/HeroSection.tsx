"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation'

export const HeroSection = () => 
{
    return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center">
            <h1 className="text-white mb-4 text-6xl font-extrabold">
              <span>Hola, soy {" "}</span>
              <TypeAnimation
                sequence={[
                  "Lucas",
                  1000,
                  "Desarrollador Full-Stack",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
              />
            </h1>
            <p className=" text-neutral-500 text-lg mb-6 lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur numquam, dicta labore placeat, eius vitae ea unde
              suscipit molestias, laborum autem minima dolorem iure sit
              reprehenderit asperiores at deleniti error!
            </p>
            <div className="flex flex-col sm:flex-row">
              <button className="text-white px-6 py-3 p-1 w-fit sm:w-fit rounded-full mr-4 mb-4 sm:mb-0 border border-white">
                Contacto
              </button>
              <button className="text-black px-6 py-3 w-fit sm:w-fit ml-6 bg-white p-1 rounded-full border border-white">
                Descargar CV
              </button>
            </div>
          </div>
          <div className="col-span-5 mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src=""
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="lucas freijomil"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    );
}