/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useRef } from "react";
import { changelog } from "../../../public/assets";
import { motion } from "framer-motion";

export default function Source() {
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
    <div className="w-full py-12 mt-16 bg-gradient-to-b from-[#19161C] to-[#000]">
      <div className="px-8 lg:px-24 ">
        <motion.h2
          variants={opacity}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-[2.4rem] text-white leading-[42px]"
        >
          Go to the source.
        </motion.h2>
        <motion.p
          variants={opacity}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-[1.25rem] mt-2 text-[#C4C4C4] leading-[27px]"
        >
          Read the documentation for Solana and popular tools.
        </motion.p>

        <div className="flex flex-wrap justify-between mt-12 items-center">
          <motion.div
            variants={slideRight}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="lg:w-[47%]"
          >
            <div className="flex justify-between items-start">
              <p className="text-3xl text-white leading-[33px]">Solana Docs</p>
              <button className="w-[9.25rem] h-12 border rounded-3xl text-white text-sm leading-5 uppercase">
                View all
              </button>
            </div>
            <br />
            <hr />
            <p className="text-[1.25rem] mt-8 text-white leading-[27px]">
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </p>
          </motion.div>

          <motion.div
            variants={slideLeft}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="lg:w-[47%]"
          >
            <div className="flex justify-between items-start">
              <p className="text-3xl text-white leading-[33px]">
                Metaplex Docs
              </p>
              <button className="w-[9.25rem] h-12 border rounded-3xl text-white text-sm leading-5">
                View all
              </button>
            </div>
            <br />
            <hr />
            <p className="text-[1.25rem] mt-8 text-white leading-[27px]">
              Learn what you build with Metaplex, make the process of creating
              and launching NFTs easier.
            </p>
          </motion.div>
        </div>

        <div className="w-full flex flex-wrap justify-between items-start mt-28">
          <motion.div
            variants={slideRight}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="lg:w-[32rem]"
          >
            <h2 className="text-4xl leading-[42px] text-white">
              Solana Changelog
            </h2>
            <p className="text-lg leading-[27.3px] text-white mt-8">
              Some more Solana changes from Jacob & Joe. Subscribe to the
              newsletter: https://solana.us17.list-manage.com/s... Proposal -
              Priced Compute Units: ...
            </p>
            <button className="w-[12.5rem] border h-6 rounded-3xl text-sm text-white uppercase mt-14">
              Latest episode
            </button>
          </motion.div>
          <motion.div
            variants={slideLeft}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="lg:w-[33rem] mt-12 lg:mt-0 h-[20rem]"
          >
            <Image src={changelog} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
