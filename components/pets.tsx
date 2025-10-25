"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { petsData } from "@/lib/data";

export const Pets = () => {
  const [petIndex, setPetIndex] = useState(0);
  const petDetails = petsData[petIndex];

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden xl:flex xl:w-1/3 xl:pl-40">
          <Image
            src="/assets/pets/badge.svg"
            width={230}
            height={227}
            alt="Pets badge"
          />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="lg:w-1/3 flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              <p className="text-[32px] capitalize">{petDetails.category}</p>
              <p className="text-[17px] uppercase mb-1">({petDetails.name})</p>
              <Image
                src={petDetails.image}
                alt={`${petDetails.name} the ${petDetails.category}`}
                width={150}
                height={150}
                priority
                className="mx-auto lg:mx-0 border-4 border-white rounded-full aspect-square object-cover object-center"
              />
            </div>
          </div>

          <div className="relative flex-1 flex items-center lg:w-3/5">
            <ul className="flex flex-wrap justify-center lg:justify-end lg:-mr-6 gap-4">
              {petsData.map((pet, index) => (
                <li
                  key={pet.id}
                  aria-label={`Show ${pet.name} the ${pet.category}`}
                  onClick={() => setPetIndex(index)}
                  className="relative cursor-pointer"
                >
                  <div
                    className={cn(
                      "absolute w-full h-full rounded-full transition-all duration-300",
                      petIndex === index
                        ? "ring-4 ring-white"
                        : "bg-black/40 hover:bg-black/20"
                    )}
                  />
                  <Image
                    src={pet.image}
                    alt={`${pet.name} image`}
                    width={90}
                    height={90}
                    draggable={false}
                    className="rounded-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
