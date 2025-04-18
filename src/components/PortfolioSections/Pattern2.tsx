"use client";
import React from "react";
import SubSectionHead from "../typography/SubSectionHead";
import Image from "next/image";
import CustomImage from "./CustomImage";
import { fadeIn, opacity } from "../framer-variants";
import { motion } from "framer-motion";

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

function Pattern2({
  sectionHead,
  sectionsPoints,
  galleryQuote,
  sectionImages,
}: IPattern1Props) {
  return (
    <div className="border mx-auto flex gap-5 px-5 flex-col md:flex-row relative mt-10 md:mt-28">
      {/* lens svgs */}
      <div className="w-[160vw] aspect-[1/2] md:aspect-[2/3] absolute pointer-events-none -top-10 right-10  md:right-[40vw] md:w-[80vw]">
        <Image src="/Assets/svgs/lens.svg" alt="" fill />
      </div>

      {/* gallery  */}
      <div className="basis-[75%] flex flex-col gap-3 justify-center ">
        <div
          className="relative w-[90%] mx-auto grid grid-cols-3 grid-rows-5 gap-2 
         | min-h-[60vh] max-h-[60vh] mobL:min-h-[70vh] mobL:max-h-[75vh] sm:min-h-[80vh] sm:max-h-[80vh] xl:min-h-[90vh] xl:max-h-[90vh] 
            2xl:min-h-[95vh] 2xl:max-h-[95vh] 3xl:min-h-[100vh] 3xl:max-h-[100vh]"
        >
          {/* r1c1 */}
          <div className="row-start-1 row-end-2  h-full w-full flex justify-end">
            <motion.div
              variants={fadeIn("up", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="relative w-[65%] h-full"
            >
              <CustomImage
                url={sectionImages?.[0]?.url ?? ""}
                alt={sectionImages?.[0]?.alt ?? ""}
                fill={false}
                className=""
              />
            </motion.div>
          </div>

          {/* r1-r2 c2 */}
          <div className="row-start-1 row-end-3 h-full w-full flex items-end">
            <motion.div
              variants={fadeIn("down", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="relative w-full h-[80%]"
            >
              <CustomImage
                url={sectionImages?.[2]?.url ?? ""}
                alt={sectionImages?.[2]?.alt ?? ""}
              />
            </motion.div>
          </div>

          {/* r2 c1 */}
          <div className="row-start-2 row-end-3 h-full w-full flex justify-end">
            <motion.div
              variants={fadeIn("right", 0.2, 120)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="relative w-[90%] h-[90%] "
            >
              <CustomImage
                url={sectionImages?.[1]?.url ?? ""}
                alt={sectionImages?.[1]?.alt ?? ""}
              />
            </motion.div>
          </div>

          {/* quote - r1 c3 */}
          <div
            className="font-aladin underline flex flex-col items-start justify-end 
            | md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px] 4xl:text-[38px]"
          >
            {galleryQuote.map((quote, index) => (
              <motion.p
                variants={opacity(0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                key={index}
                className=""
              >
                {quote}
              </motion.p>
            ))}
          </div>

          {/* r2 c3 */}
          <motion.div
            variants={fadeIn("down", 0.2, 120)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="relative row-start-2 row-end-3 h-full"
          >
            <CustomImage
              url={sectionImages?.[3]?.url ?? ""}
              alt={sectionImages?.[3]?.alt ?? ""}
            />
          </motion.div>

          {/* r3 c1 */}
          <motion.div
            variants={fadeIn("left", 0.2, 120)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="relative row-start-3 row-end-3 w-full aspect-[3/5] h-full"
          >
            <CustomImage
              url={sectionImages?.[4]?.url ?? ""}
              alt={sectionImages?.[4]?.alt ?? ""}
            />
          </motion.div>

          {/* group - imgs  */}
          <div className=" row-start-3 row-end-6 aspect-[3/5] h-full grid grid-cols-1 grid-rows-4 w-full gap-y-2">
            <motion.div
              variants={fadeIn("right", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative h-[]"
            >
              <CustomImage
                url={sectionImages?.[5]?.url ?? ""}
                alt={sectionImages?.[5]?.alt ?? ""}
              />
            </motion.div>

            <div className="w-full h-full flex justify-center items-center">
              <motion.div
                variants={fadeIn("up", 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="relative w-[80%] h-[80%]"
              >
                <CustomImage
                  url={sectionImages?.[8]?.url ?? ""}
                  alt={sectionImages?.[8]?.alt ?? ""}
                />
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("right", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative"
            >
              <CustomImage
                url={sectionImages?.[9]?.url ?? ""}
                alt={sectionImages?.[9]?.alt ?? ""}
              />
            </motion.div>

            <div className="w-full h-full flex justify-center items-center">
              <motion.div
                variants={fadeIn("left", 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="relative w-[80%] h-[80%]"
              >
                <CustomImage
                  url={sectionImages?.[11]?.url ?? ""}
                  alt={sectionImages?.[11]?.alt ?? ""}
                />
              </motion.div>
            </div>
          </div>

          {/* r3 c3 */}
          <div className="row-start-3 row-end-3 w-full aspect-[3/5] h-full flex items-end">
            <motion.div
              variants={fadeIn("up", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative w-full h-[90%]"
            >
              <CustomImage
                url={sectionImages?.[6]?.url ?? ""}
                alt={sectionImages?.[6]?.alt ?? ""}
              />
            </motion.div>
          </div>

          {/* r4-6 c1 */}
          <div className="row-start-4 row-end-6 w-full  h-full flex justify-end">
            <motion.div
              variants={fadeIn("right", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="relative h-[80%] w-[80%]"
            >
              <CustomImage
                url={sectionImages?.[7]?.url ?? ""}
                alt={sectionImages?.[7]?.alt ?? ""}
              />
            </motion.div>
          </div>

          {/* r4 c1 */}
          <div className="relative row-start-4 row-end-6 h-[50%] w-[70%]">
            <motion.div
              variants={fadeIn("left", 0.1, 100)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className=""
            >
              <CustomImage
                url={sectionImages?.[10]?.url ?? ""}
                alt={sectionImages?.[10]?.alt ?? ""}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* section details */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="basis-[25%]  flex flex-col gap-2 h-full self-center"
      >
        <SubSectionHead text={sectionHead} />
        <div className="">
          <ul className="flex flex-col gap-1 text-[14px] md:text-[16px] xl:text-[18px] 4xl:text-[24px]">
            {sectionsPoints.map((point, index) => (
              <motion.li
                variants={fadeIn("left", (0.25 * index) / 2)}
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
      </motion.div>
    </div>
  );
}

export default Pattern2;
