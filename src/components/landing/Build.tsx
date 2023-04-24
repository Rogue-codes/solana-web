import Image from "next/image";
import React, { useRef, useState } from "react";
import {
  avatar,
  chimp,
  clano,
  fox,
  nybodies,
  okay,
} from "../../../public/assets";
import { motion } from "framer-motion";

export default function Build() {
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

  const scrollRef = useRef(null);
  const [active, setActive] = useState<number>(0);

  const handleActive = (index: number) => {
    setActive(index);
  };
  const data = ["NFTs", "DeFi", "Payments", "Gaming", "DAOs"];
  return (
    <div className="w-full mt-28 py-8 px-2 lg:px-0">
      <div className="w-full flex flex-col lg:flex-row mb-8">
        <motion.div
          variants={slideRight}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:w-1/2 text-white text-4xl leading-[46px]"
        >
          Build for growth.
        </motion.div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <motion.ul
            variants={slideLeft}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="w-full flex text-white justify-around items-center"
          >
            {data.map((data, index) => (
              <li
                key={index}
                className={`${
                  active === index
                    ? "px-4 py-2 border border-[#A962FF]"
                    : "border-[#111111]"
                } cursor-pointer bg-[#111111] rounded-[15px] `}
                onClick={() => handleActive(index)}
              >
                {data}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-center items-center ">
        <motion.div
          variants={slideRight}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:w-1/2 h-[25rem]"
        >
          <Image src={avatar} className="w-full h-full object-cover" alt="" />
        </motion.div>

        <motion.div
          variants={slideLeft}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:h-[25rem] lg:pl-[3rem] pl-4 pt-12 lg:pt-[6rem] bg-[#111111] lg:w-1/2"
        >
          <div>
            <Image src={nybodies} alt="" />
          </div>
          <p className="text-lg leading-[27px] text-white mt-7">
            It’s time to bridge the digital and physical. Anybodies helps
            established brands like Toys’R’Us connect real-life places and
            products with NFTs.
          </p>
          <span className="text-md block text-[#A962FF] mt-8">
            Learn more about NFTs on Solana
          </span>
        </motion.div>
      </div>

      <motion.div
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="flex w-full justify-around items-center mt-6"
      >
        <div>
          <Image src={clano} alt="" />
        </div>
        <div>
          <Image src={chimp} alt="" />
        </div>
        <div>
          <Image src={fox} alt="" />
        </div>
        <div>
          <Image src={okay} alt="" />
        </div>
      </motion.div>
    </div>
  );
}
