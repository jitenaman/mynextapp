"use client";
import React from "react";
import SubSectionHead from "../typography/SubSectionHead";
import Image from "next/image";
import CustomImage from "./CustomImage";
import { motion } from "framer-motion";
import { fadeIn, opacity } from "../framer-variants";

interface IGalleryItem {
  id: string | number;
  url: string;
  type: "image" | "video";
}

interface IPattern1Props {
  sectionHead: string;
  sectionsPoints: string[];
  galleryQuote: string[];
  sectionImages: { url: string; alt: string }[];
}

function Pattern3({
  sectionHead,
  sectionsPoints,
  galleryQuote,
  sectionImages,
}: IPattern1Props) {
  return (
    <div className="border mx-auto flex gap-5 px-5 flex-col-reverse md:flex-row relative mb-16">
      {/* section details */}
      <div className="basis-[25%]  flex flex-col gap-2 h-full self-center md:items-center">
        <SubSectionHead text={sectionHead} />
        <div className="">
          <ul className="flex flex-col gap-1 text-[14px] md:text-[16px] xl:text-[18px] 2xl:text-[20px] 4xl:text-[24px]">
            {sectionsPoints.map((point, index) => (
              <motion.li
                variants={fadeIn("right", (0.25 * index) / 2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                key={point}
                className=""
              >
                {point}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* gallery  */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{
          scale: 1,
          transition: {
            type: "tween",
            duration: 1.5,
            delay: 0.1,
            ease: [0.25, 0.25, 0.25, 0.75],
          },
        }}
        viewport={{ once: false, amount: 0.1 }}
        className="basis-[75%] flex flex-col gap-3 justify-center mt-20"
      >
        <div
          className="relative w-[90%] mx-auto grid grid-cols-6 grid-rows-7 gap-2 |
            h-[70vh] mdl:h-[85vh] xl:h-[90vh]"
        >
          {/* quote - r1 c1 */}
          <div
            className="row-start-1 col-start-1 col-end-3 font-aladin underline flex flex-col items-end justify-center 
            | text-[14px] mobL:text-[17px] md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px] 4xl:text-[38px]"
          >
            {galleryQuote.map((quote, index) => (
              <motion.p
                variants={opacity(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                key={index}
                className=""
              >
                {quote}
              </motion.p>
            ))}
          </div>

          {/* r1-2 c2 */}
          <div className="row-start-1 row-end-3 col-start-3 col-end-5  h-full w-full flex justify-center">
            <div className="relative w-[80%] h-full">
              <CustomImage
                url={sectionImages?.[0]?.url ?? ""}
                alt={sectionImages?.[0]?.alt ?? ""}
                fill={false}
                className=""
              />
            </div>
          </div>

          {/* r1-2 c3 */}
          <div className="row-start-1 row-end-3 col-start-5 col-end-7  h-full w-full flex justify-start items-end">
            <motion.div
              variants={opacity(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative w-[80%] h-[85%]"
            >
              <CustomImage
                url={sectionImages?.[1]?.url ?? ""}
                alt={sectionImages?.[1]?.alt ?? ""}
                fill={false}
                className=""
              />
            </motion.div>
          </div>

          {/* r2-5 c1 */}
          <div className="row-start-2 row-end-5 col-start-1 col-end-3  h-full w-full flex justify-start items-end">
            <motion.div
              variants={opacity(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative w-[95%] h-full"
            >
              <CustomImage
                url={sectionImages?.[2]?.url ?? ""}
                alt={sectionImages?.[2]?.alt ?? ""}
                fill={false}
                className=""
              />
            </motion.div>
          </div>

          {/* r3-5 c3-5 */}
          <div className="row-start-3 row-end-5 col-start-3 col-end-6  h-full w-full flex justify-start items-center">
            <div className="relative w-[80%] h-[80%]">
              <CustomImage
                url={sectionImages?.[3]?.url ?? ""}
                alt={sectionImages?.[3]?.alt ?? ""}
                fill={false}
                className=""
              />
            </div>
          </div>

          {/* r3-5 c5-7 */}
          <div className="row-start-3 row-end-5 col-start-5 col-end-7  h-full w-full flex justify-end items-center">
            <div className="relative w-[76%] h-[60%]">
              <CustomImage
                url={sectionImages?.[4]?.url ?? ""}
                alt={sectionImages?.[4]?.alt ?? ""}
                fill={false}
                className=""
              />
            </div>
          </div>

          {/* r5-7 c2-4 */}
          <div className="row-start-5 row-end-7 col-start-2 col-end-5  h-full w-full flex justify-start items-center">
            <div className="relative w-[80%] h-[85%]">
              <CustomImage
                url={sectionImages?.[5]?.url ?? ""}
                alt={sectionImages?.[5]?.alt ?? ""}
                fill={false}
                className=""
              />
            </div>
          </div>

          {/* r5-7 c4-6 */}
          <div className="row-start-5 row-end-7 col-start-4 col-end-6  h-full w-full flex justify-end items-center">
            <motion.div
              variants={opacity(0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative w-[70%] h-full"
            >
              <CustomImage
                url={sectionImages?.[6]?.url ?? ""}
                alt={sectionImages?.[6]?.alt ?? ""}
                fill={false}
                className=""
              />
            </motion.div>
          </div>

          {/* r5-8 c2-4 */}
          <div className="row-start-6 row-end-8 col-start-2 col-end-4  h-full w-full flex justify-center items-end">
            <div className="relative w-[80%] h-[50%]">
              <CustomImage
                url={sectionImages?.[7]?.url ?? ""}
                alt={sectionImages?.[7]?.alt ?? ""}
                fill={false}
                className=""
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Pattern3;
