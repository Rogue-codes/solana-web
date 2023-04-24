import Image from "next/image";
import React, { useRef } from "react";
import { youtube } from "../../../public/assets";
import { motion } from "framer-motion";

export default function Contact() {
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
    <div className="px-8 lg:px-24 my-20">
      <div className="w-full flex flex-wrap justify-between items-center">
        <motion.div
          variants={slideRight}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:w-[48%] w-full p-4 lg:p-12 rounded-[14px] bg-[#19161C]"
        >
          <h2 className="text-xl font-bold lg:font-normal lg:text-[2.25rem] lg:leading-[27px] text-white">
            Solana Developer Update
          </h2>
          <p className="text-md leading-[2.4rem] text-[#C4C4C4] mt-8">
            Sign up to the newsletter and learn about new resources, new
            commits, new proposals, and more.
          </p>
          <div className="w-full lg:w-[25rem] mt-20 bg-black h-[4rem] flex p-2 rounded-[800px] ">
            <input
              type="text"
              className="bg-transparent w-full lg:w-[19rem] p-2 placeholder:text-md placeholder:leading-5"
              placeholder="Email"
            />
            <button className="w-full lg:w-[6rem] bg-[#14F195] rounded-[800px]">
              SIGN UP
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={slideLeft}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:w-[48%] w-full mt-8 lg:mt-0 p-8 rounded-[14px] bg-[#19161C]"
        >
          <h2 className="text-xl font-bold lg:font-normal lg:text-[2.25rem] lg:leading-[27px] text-white">
            Even more resources
          </h2>
          <p className="text-md leading-[2.4rem] text-[#C4C4C4] mt-8">
            More videos, more episodes. Discussions between industry leaders in
            both blockchain and technology, our team, and community developers.
          </p>
          <div className="lg:w-[27rem] w-full mt-20 bg-transparent h-32 lg:h-[4rem] flex flex-wrap !justify-between mx-auto">
            <button className="lg:w-[12rem] w-full uppercase bg-transparent border-2 rounded-[800px] text-white flex justify-center gap-5 items-center">
              {" "}
              <p>YouTube</p> <Image src={youtube} alt="" />
            </button>
            <button className="lg:w-[12rem] w-full mt-6 lg:mt-0 bg-transparent rounded-[800px] border-2 text-white uppercase flex justify-center gap-5 items-center">
              {" "}
              <p>Podcast</p> <Image src={youtube} alt="" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
