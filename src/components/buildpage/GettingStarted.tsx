import Image from "next/image";
import React, { useRef } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  boot,
  buildspace,
  devcourse,
  freecode,
  scafold,
  solanadev,
  solbytes,
} from "../../../public/assets";

export default function GettingStarted() {
  const arr = [
    {
      img: buildspace,
      btnText: "14 Chapters",
      text: "Buildspace",
    },
    {
      img: solbytes,
      btnText: "12 Chapters",
      text: "Solana Bytes",
    },
    {
      img: scafold,
      btnText: "1 Chapters",
      text: "Scaffold Series",
    },
    {
      img: freecode,
      btnText: "3 Chapters",
      text: "Freecodecamp Solana Course",
    },
    {
      img: solanadev,
      btnText: "167 Chapters",
      text: "Solana Development by Knox",
    },
    {
      img: boot,
      btnText: "8 Chapters",
      text: "Solana Bootcamp",
    },
  ];

  const slideUp = {
    hide: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { delay: 1, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const width = {
    hide: {
      width: "0%",
      opacity: 0,
    },
    show: {
      width: "100%",
      opacity: 1,
      transition: { delay: 2, duration: 15, type: "spring", stiffness: 120 },
    },
  };

  const opacity = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 2, duration: 2, type: "spring", stiffness: 120 },
    },
  };
  const scrollRef = useRef(null);

  return (
    <div className="px-8 lg:px-24  w-full">
      <motion.h2
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-[3rem] lg:text-[2.4rem] text-white leading-[42px]"
      >
        Get started.
      </motion.h2>
      <motion.p
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-[1.5rem] lg:text-[1.25rem] mt-8 lg:mt-2 text-[#C4C4C4] leading-[27px]"
      >
        Use these Solana Foundation and community courses to begin your journey
        into Solana development.
      </motion.p>
      <motion.div
        variants={width}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-full lg:pl-[5.5rem] lg:pt-28 relative overflow-hidden mt-5 rounded-[18px] p-5 lg:h-[23rem]"
      >
        <Image
          src={devcourse}
          alt=""
          className="-z-30 absolute rounded-[18px] w-full object-cover h-[30rem] lg:h-full left-0 top-0"
        />
        <motion.div
          variants={opacity}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
        >
          <button className="w-[5.25rem] h-4 rounded-2xl bg-[#9945FF] text-xs text-white leading-[18px]">
            17 Chapters
          </button>
          <h2 className="text-4xl mt-4 text-white leading-10">
            Solana Development Course
          </h2>
          <p className="text-md mt-4 leading-[27px] text-white">
            Quickstart your Solana development starting from nothing to complex
            programs.
          </p>
          <IoArrowForwardCircleOutline className="text-3xl mt-[1.6rem] text-white" />
        </motion.div>
      </motion.div>

      <div className="w-full mt-6 flex flex-wrap justify-between items-center">
        {arr.map((item, index) => (
          <motion.div
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            key={index}
            className="w-[21.6rem] mb-8 relative rounded-[18px] h-[20rem]"
          >
            <Image
              src={item.img}
              className="absolute -z-30 left-0 top-0 w-full h-full"
              alt=""
            />
            <div className="pl-8 pt-48 lg:pt-56">
              <button className="w-[5.25rem] h-4 rounded-2xl bg-[#9945FF] text-xs text-white leading-[18px]">
                {item.btnText}
              </button>
              <p className="text-lg mt-4 leading-[25px] text-white">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
