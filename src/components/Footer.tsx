import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  footerLogo,
  globe,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  logo,
} from "../../public/assets";

export default function Footer() {
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

  return (
    <div className="py-6 px-5 t40-container border-t border-[#141414] flex flex-col lg:flex-row">
      <div className="w-full lg:w-[40%]">
        <motion.div
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="w-8 h-8"
        >
          <Image
            className="w-full h-full object-cover"
            src={footerLogo}
            alt=""
          />
        </motion.div>
        <motion.p
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-[1rem] mt-5 font-normal leading-[27px] text-white"
        >
          Managed by Solana Foundation
        </motion.p>
        <ul className="w-full flex mt-5 justify-start gap-5 items-center">
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="h-8 w-8 p-2 rounded-md bg-[#848895]"
          >
            <Image src={icon1} className="h-full w-full object-cover" alt="" />
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="h-8 w-8 p-2 rounded-md bg-[#848895]"
          >
            <Image src={icon2} className="h-full w-full object-cover" alt="" />
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="h-8 w-8 p-2 rounded-md bg-[#848895]"
          >
            <Image src={icon3} className="h-full w-full object-cover" alt="" />
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="h-8 w-8 p-2 rounded-md bg-[#848895]"
          >
            <Image src={icon4} className="h-full w-full object-cover" alt="" />
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="h-8 w-8 p-2 rounded-md bg-[#848895]"
          >
            <Image src={icon5} className="h-full w-full object-cover" alt="" />
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="h-8 w-8 p-2 rounded-md bg-[#848895]"
          >
            <Image src={icon6} className="h-full w-full object-cover" alt="" />
          </motion.li>
        </ul>
        <motion.p
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-[1rem] mt-5 leading-[27px] text-[#848895]"
        >
          ©2023 Solana Foundation. All rights reserved.
        </motion.p>
      </div>

      <div className="w-full lg:w-[60%] mt-8 lg:mt-0 flex justify-between items-start">
        <ul>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white text-[1rem] leading-[19px] uppercase"
          >
            Solana
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Grants
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Break Solana
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Media Kit
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Careers
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Disclaimer
          </motion.li>
        </ul>

        <ul>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-white text-[1rem] leading-[19px] uppercase"
          >
            Get Connected
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Ecosystem
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Blog
          </motion.li>
          <motion.li
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-[#848895] text-sm leading-[27px]"
          >
            Newsletter
          </motion.li>
        </ul>

        <motion.div
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="flex justify-start gap-3 items-center"
        >
          <span>
            <Image src={globe} alt="" />
          </span>
          <p>EN</p>
        </motion.div>
      </div>
    </div>
  );
}
