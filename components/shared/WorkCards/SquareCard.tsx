"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export function SquareCard({ image }: { image: string }) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="/"
      className="rounded-bl-3xl aspect-square overflow-clip relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={image}
        alt=""
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
      />

      <motion.div className="w-20 h-full absolute bottom-0 left-0 z-10">
        <div className="bg-gradient-striped bg-[length:10%_10px] h-5/6 w-full rounded-t-full overflow-clip absolute z-10 bottom-0" />
        <div className="bg-starbots-blue w-full rounded-t-full overflow-clip absolute z-20 bottom-0  h-2/3" />
      </motion.div>
    </Link>
  );
}
