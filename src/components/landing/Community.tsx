/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  bg2,
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
} from "../../../public/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Community() {
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

  const appear = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 2, type: "spring", stiffness: 120 },
    },
  };

  const scrollRef = useRef(null);

  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   autoplay: true,
  //   centerPadding: "240px",
  //   slidesToShow: 2,
  //   speed: 500,
  //   rows: 2,
  //   slidesPerRow: 1,
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 2,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className="w-full h-[58rem] mt-32 relative p-2 lg:p-0">
      {/* slider */}
      <motion.div
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-full bg-transparent backdrop-blur-lg"
      >
        <Slider {...settings}>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame1} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem] !flex flex-col justify-center items-center bg-[#19161C]">
            <h2 className="text-4xl text-[#F087FF] leading-[46.2px]">11,000</h2>
            <p className="text-[#BABABA] text-xs leading-4 mt-3">
              Solana Hacker House participants
            </p>
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame2} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame3} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem] !flex flex-col justify-center items-center bg-[#19161C]">
            <h2 className="text-4xl text-[#00BCD4] leading-[46.2px]">48,000</h2>
            <p className="text-[#BABABA] text-xs leading-4 mt-3">
              Developers building during Solana Hackathons
            </p>
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame4} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame6} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame5} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]!flex flex-col justify-center items-center bg-[#19161C]">
            <h2 className="text-4xl text-[#FFEB3B] leading-[46.2px]">3,800</h2>
            <p className="text-[#BABABA] text-xs leading-4 mt-3">
              Solana Breakpoint 2022 attendees
            </p>
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame7} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]!flex flex-col justify-center items-center bg-[#19161C]">
            <h1 className="text-4xl text-[#19FB9B] leading-[46.2px]">48,000</h1>
            <p className="text-[#BABABA] text-xs leading-4 mt-3">
              Developers building during Solana Hackathons
            </p>
          </div>
          <div className="!w-[16rem] m-2 h-[14rem]">
            <Image src={frame8} className="w-full h-full object-cover" alt="" />
          </div>
        </Slider>
      </motion.div>

      <motion.div
        variants={appear}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-full"
      >
        <h2 className="text-2xl lg:text-[2.4rem] mt-24 text-white text-center leading-[46px]">
          It's time to join the thousands of creators, artists, and developers
          using Solana.
        </h2>
        <button className="w-[11rem] h-[3.25rem] !mx-auto flex justify-center mt-5 items-center border bg-gradient-to-r from-[#8C01FA] to-[#000000] rounded-[36px] border-black text-white text-sm">
          Start building
        </button>
      </motion.div>

      <div className="absolute -z-30 w-full h-full left-0 top-0">
        <Image src={bg2} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Community;
