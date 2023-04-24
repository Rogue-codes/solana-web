import React, { useRef } from "react";
import { motion } from "framer-motion";
export default function Join() {
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
      x: 10,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const scrollRef = useRef(null);
  return (
    <div className="w-full mt-32">
      {/* first section */}
      <div className="flex flex-col lg:flex-row justify-center items-start">
        <motion.p
          variants={slideRight}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-white w-full p-2 lg:p-0 lg:w-[50%] text-3xl leading-[46px] pt-6"
        >
          Join a community <br />
          of millions
        </motion.p>

        <motion.div
          variants={slideLeft}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:w-[50%] w-full p-2 lg:p-0"
        >
          <div className="">
            <p className="lg:text-8xl text-7xl font-bold lg:font-normal leading-[132px] bg-gradient-to-r from-[#19FB9B] to-[#8C01FA] text-transparent bg-clip-text animate-gradient">
              11.5M+
            </p>
            <small className="text-[#C4C4C4] text-[1rem] leading-[27px] uppercase">
              Active accounts
            </small>
          </div>

          <div className=" mt-12">
            <p className="lg:text-8xl text-7xl font-bold lg:font-normal leading-[132px] bg-gradient-to-r from-[#0047FF] to-[#00BCD4] text-transparent bg-clip-text animate-gradient">
              21.9M
            </p>
            <small className="text-[#C4C4C4] text-[1rem] leading-[27px] uppercase">
              NFTs minted
            </small>
          </div>

          <div className=" mt-12">
            <p className="text-7xl lg:text-8xl font-bold lg:font-normal leading-[132px] bg-gradient-to-r from-[#00FFBD] to-[#025B8C] text-transparent bg-clip-text animate-gradient">
              $0.00025
            </p>
            <small className="text-[#C4C4C4] text-[1rem] leading-[27px] uppercase">
              Average cost per transaction
            </small>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
