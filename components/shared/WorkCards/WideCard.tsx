"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import classNames from "classnames";

export function WideCard() {
  const [hover, setHover] = useState(false);

  const stripeColors = [
    "bg-starbots-yellow",
    "bg-white",
    "bg-starbots-blue",
    "bg-white",
    "bg-starbots-pink",
    "bg-white",
    "bg-starbots-teal",
    "bg-white",
    "bg-starbots-blue",
    "bg-white",
    "bg-starbots-yellow",
    "bg-white",
    "bg-slate-700",
    "bg-white",
    "bg-starbots-peach",
    "bg-white",
  ];

  const delay = 0.025;
  const duration = 0.35;
  const stripes = {
    hidden: (index: number) => ({
      height: 0,
      transition: {
        delay: delay * index,
        duration,
      },
    }),
    visible: (index: number) => ({
      height: "100%",
      transition: {
        delay: delay * index,
        duration,
      },
    }),
  };

  const background = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.35,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.35,
      },
    },
  };

  return (
    <Link
      href="/"
      className="rounded-tr-3xl rounded-bl-3xl aspect-video col-span-2 overflow-clip relative group"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="absolute pl-6 pt-6 pb-6 flex flex-col z-30 h-full justify-between">
        <div className="flex flex-col">
          <div className="bg-slate-700 text-white font-bold py-2 px-4 rounded-2xl w-fit">
            Bangor University
          </div>
          <h2
            className={classNames(
              hover ? "scale-150" : "scale-100",
              "transition-transform font-bold text-2xl mt-4 max-w-sm text-white duration-300 origin-top-left"
            )}
          >
            Revolutionising digital recruitment campaign
          </h2>
        </div>

        <div
          className={classNames(
            hover ? "opacity-100 delay-300" : "opacity-0 delay-0",
            "transition-opacity text-white bg-starbots-blue rounded-full w-fit px-4 py-2 font-semibold text-sm duration-300"
          )}
        >
          Find out more
        </div>
      </div>

      <Image
        src="https://picsum.photos/id/39/2000/600"
        alt=""
        width={2000}
        height={600}
        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
      />

      <motion.div
        className="absolute z-10 inset-0 bg-starbots-pink"
        animate={hover ? "visible" : "hidden"}
        initial="hidden"
        variants={background}
      />

      <div className="absolute -bottom-1/4 right-1/4 z-20 h-[150vh] w-1/3 flex rotate-45 origin-bottom-left items-end">
        {stripeColors.map((color, index) => (
          <motion.div
            key={index}
            className={classNames(color, "w-full h-full rounded-full")}
            variants={stripes}
            initial="hidden"
            animate={hover ? "visible" : "hidden"}
            custom={index}
          />
        ))}
      </div>
    </Link>
  );
}
