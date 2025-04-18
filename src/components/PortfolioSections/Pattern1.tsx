"use client";
import React, { useEffect, useRef } from "react";
import SubSectionHead from "../typography/SubSectionHead";
import CustomImage from "./CustomImage";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeIn } from "../framer-variants";

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

function Pattern1({
  sectionHead,
  sectionsPoints,
  galleryQuote,
  sectionImages,
}: IPattern1Props) {
  const container = useRef(null);
  const isInView = useInView(container);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={container}
      className="border mx-auto flex gap-5 px-5 flex-col-reverse md:flex-row relative "
    >
      {/* section details */}
      <motion.div
        className="basis-[25%] flex flex-col gap-2 h-full self-center md:items-center"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <SubSectionHead text={sectionHead} className="" />
        <div className="">
          <ul className="flex flex-col gap-1 text-[14px] md:text-[16px] xl:text-[18px] 4xl:text-[24px]">
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
      </motion.div>

      {/* gallery  */}
      <div className="basis-[75%] flex flex-col gap-3 justify-center">
        {/* row 1 */}
        <div className="relative w-[90%] mx-auto ">
          {/* assets */}
          <div className="grid grid-cols-11 gap-x-2 w-full items-baseline">
            {/* quote */}
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="font-aladin underline flex flex-col items-end 
            | absolute left-0 -top-5 mobS:-top-3 mobL:top-0 mds:top-3
            | md:text-[20px] lg:text-[22px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[36px] 4xl:text-[38px]
            | md:left-0 md:right-[50%] md:-top-1 lg:top-0 4xl:top-3"
            >
              {galleryQuote.map((quote, index) => (
                <p key={index} className="">
                  {quote}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-3 relative aspect-[5/3]"
            >
              <CustomImage
                url={sectionImages?.[0]?.url ?? ""}
                alt={sectionImages?.[0]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-3 relative aspect-[5/3]"
            >
              <CustomImage
                url={sectionImages?.[1]?.url ?? ""}
                alt={sectionImages?.[1]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-2 relative aspect-[2/3.5]"
            >
              <CustomImage
                url={sectionImages?.[2]?.url ?? ""}
                alt={sectionImages?.[2]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-3 relative aspect-[5/3]"
            >
              <CustomImage
                url={sectionImages?.[3]?.url ?? ""}
                alt={sectionImages?.[3]?.alt ?? ""}
              />
            </motion.div>
          </div>
        </div>

        {/* row 2 */}
        <div className="relative w-full">
          <div className="grid grid-cols-12 gap-x-2 w-full">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-2 relative pb-[147.75%]"
            >
              <CustomImage
                url={sectionImages?.[4]?.url ?? ""}
                alt={sectionImages?.[4]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-2 relative pb-[147.75%]"
            >
              <CustomImage
                url={sectionImages?.[5]?.url ?? ""}
                alt={sectionImages?.[5]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-5 relative "
            >
              <CustomImage
                url={sectionImages?.[6]?.url ?? ""}
                alt={sectionImages?.[6]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-3 relative "
            >
              <CustomImage
                url={sectionImages?.[7]?.url ?? ""}
                alt={sectionImages?.[7]?.alt ?? ""}
              />
            </motion.div>
          </div>
        </div>

        {/* row 3 */}
        <div className="relative w-full mx-auto">
          <div className="grid grid-cols-11 gap-x-2 w-full items-start ">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-start-2 col-end-4 relative aspect-[4/3]"
            >
              <CustomImage
                url={sectionImages?.[8]?.url ?? ""}
                alt={sectionImages?.[8]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-3 relative aspect-[2/3]"
            >
              <CustomImage
                url={sectionImages?.[9]?.url ?? ""}
                alt={sectionImages?.[9]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-2 relative aspect-[4/3]"
            >
              <CustomImage
                url={sectionImages?.[10]?.url ?? ""}
                alt={sectionImages?.[10]?.alt ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="col-span-3 relative aspect-[4/3]"
            >
              <CustomImage
                url={sectionImages?.[11]?.url ?? ""}
                alt={sectionImages?.[11]?.alt ?? ""}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pattern1;
