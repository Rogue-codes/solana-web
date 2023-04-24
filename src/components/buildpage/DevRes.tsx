import Image from "next/image";
import React, { useRef } from "react";
import { build } from "../../../public/assets";
import { motion } from "framer-motion";

export default function DevRes() {
  const slideRight = {
    hide: {
      x: "-5%",
      opacity: 0,
    },
    show: {
      x: "0%",
      opacity: 1,
      transition: { delay: 1, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const slideLeft = {
    hide: {
      x: 50,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, duration: 2, type: "spring", stiffness: 120 },
    },
  };


  const scrollRef = useRef(null);
  return (
    <div className="px-8 lg:px-24 flex flex-wrap w-full justify-between items-center">
      <motion.div
        variants={slideRight}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="lg:w-[50%] h-[40rem] mt-12 lg:mt-28"
      >
        <h2 className="text-6xl lg:text-8xl leading-[60px] lg:leading-[96px] tracking-[0.48px] font-bold lg:font-normal text-white">
          Developer Resources
        </h2>
        <p className="text-[#C4C4C4] text-lg leading-6 mt-4 lg:w-[70%]">
          A manual for joining the Solana ecosystem. By builders for builders.
        </p>
        <div className="w-full flex justify-start gap-5 mt-10 items-center">
          <button className="w-32 h-[2.6rem] border border-black text-sm text-black rounded-3xl bg-[#14F195]">
            Build Now
          </button>
          <button className="w-36 lg:w-48 h-[2.6rem] border border-white text-white text-sm rounded-3xl bg-[#000]">
            Stack Exchange
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={slideLeft}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="lg:w-[50%] relative h-[30rem] lg:h-[40rem] -mt-28"
      >
        <div className="w-full h-[39rem] ">
          <Image src={build} alt="" />
        </div>

        {/* blur background */}
        <div className="absolute h-full left-0 bg-[rgba(240,135,255,0.3)] blur-[250px] -z-30 top-0 w-[39rem]"></div>
      </motion.div>
    </div>
  );
}
