import Image from "next/image";
import React, { useRef } from "react";
import {
  left,
  pat1,
  pat2,
  pat3,
  pat4,
  pat5,
  pat6,
  pat7,
  right,
} from "../../../public/assets";
import { motion } from "framer-motion";
import Link from "next/link";

const opacity = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 0, duration: 2, type: "spring", stiffness: 120 },
  },
};

const slideUp = {
  hide: {
    y: "15%",
    opacity: 0,
  },
  show: {
    y: "0%",
    opacity: 1,
    transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
  },
};

export default function Welcome() {
  const scrollRef = useRef(null);
  return (
    <div className="!w-full relative">
      <motion.div
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="relative z-40"
      >
        <h2 className="text-center relative z-40 font-bold leading-[60px] lg:leading-[74px] text-5xl lg:text-7xl text-white">
          Powerful for developers.
        </h2>
        <h2 className="text-center relative z-40 font-bold leading-[60px] lg:leading-[74px] text-5xl lg:text-7xl text-white">
          Fast for everyone.
        </h2>
        <p className="mt-8 lg:mt-[3.4rem] relative z-40 w-full lg:w-[60%] mx-auto text-center leading-[27.3px] text-white text-lg">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>

        <div className="flex w-[95%] mx-auto lg:w-full justify-center items-center gap-8 mt-12">
          <button className="w-[11rem] h-[3.25rem] border bg-gradient-to-r from-[#8C01FA] to-[#000000] rounded-[36px] border-black text-white text-sm">
            <Link href='/build'> Start building</Link>
          </button>
          <button className="w-[11rem] h-[3.25rem] border-white border  rounded-[36px] text-white text-sm">
            Read docs
          </button>
        </div>

        <div className="w-full h-28 mt-16">
          <p className="text-[#618ADC] text-center text-sm leading-[17px]">
            Powering tools and integrations from companies all around the world
          </p>
          <motion.div
            variants={opacity}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="flex justify-between items-center mt-8"
          >
            <div>
              <Image src={pat1} alt="" />
            </div>

            <div>
              <Image src={pat2} alt="" />
            </div>

            <div>
              <Image src={pat3} alt="" />
            </div>

            <div>
              <Image src={pat4} alt="" />
            </div>

            <div>
              <Image src={pat5} alt="" />
            </div>

            <div>
              <Image src={pat6} alt="" />
            </div>

            <div>
              <Image src={pat7} alt="" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* gradient images */}
      <motion.div
        variants={opacity}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="absolute -left-24 z-30 -top-32"
      >
        <Image src={left} className="w-[20rem]" alt="" />
      </motion.div>

      <motion.div
        variants={opacity}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="absolute -right-36 z-30 -top-32"
      >
        <Image src={right} className="w-[20rem]" alt="" />
      </motion.div>
    </div>
  );
}
