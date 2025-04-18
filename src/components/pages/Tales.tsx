"use client";
import React from "react";
import CustomImage from "../PortfolioSections/CustomImage";
import { motion } from "framer-motion";
import { fadeIn } from "../framer-variants";
import { storiesSection } from "@/Constants/stories";

function Tales() {
  return (
    <section id="stories" className="mt-20 my-5 px-6 ">
      <div className="text-[#981A1A] font-bold text-4xl flex flex-row gap-2 justify-center items-center">
        <motion.div
          variants={fadeIn("up", 0.2, 50)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          Fairy
        </motion.div>{" "}
        <motion.div
          variants={fadeIn("down", 0.2, 50)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          Tales
        </motion.div>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 grid-rows-5 gap-y-2 | md:grid-cols-5 md:grid-rows-5 md:gap-y-5 overflow-hidden">
          <>
            <motion.div
              variants={fadeIn("right", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="md:col-span-2 md:row-span-2 relative aspect-[1/1] md:aspect-[1/2] lg:aspect-[1/1] self-center"
            >
              <CustomImage
                url={storiesSection.stories[0].url ?? ""}
                alt={storiesSection.stories[0].alt ?? ""}
                className=""
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="md:col-span-3 md:row-span-1 md:col-start-3 bg-gray-200 p-3 flex flex-col gap-3 items-center justify-center"
            >
              <motion.div
                variants={fadeIn("up", 0.2, 50)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="italic font-semibold"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: storiesSection.stories[0].quote ?? "",
                  }}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.3, 70)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="max-w-[90%]"
              >
                {storiesSection.stories[0].story ?? ""}
              </motion.div>
            </motion.div>
          </>

          <>
            <motion.div
              variants={fadeIn("left", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="md:col-start-4 md:col-span-2 md:row-span-2 relative aspect-[1/1] md:aspect-[1/2] lg:aspect-[1/1]"
            >
              <CustomImage
                url={storiesSection.stories[1].url ?? ""}
                alt={storiesSection.stories[1].url ?? ""}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("right", 0.2, 80)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
              className="md:col-span-3 md:row-span-1 md:col-start-1 bg-gray-200 p-3 flex flex-col gap-3 items-center justify-center"
            >
              <motion.div
                variants={fadeIn("up", 0.2, 50)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="italic font-semibold"
              >
                <div dangerouslySetInnerHTML={{ __html: storiesSection.stories[0].quote ?? "" }} />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.3, 70)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="max-w-[90%]"
              >
                <p dangerouslySetInnerHTML={{ __html: storiesSection.stories[1].quote ?? "" }} />
              </motion.div>
            </motion.div>
          </>

          {storiesSection?.stories?.[2] && (
            <>
              <motion.div
                variants={fadeIn("right", 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="md:col-span-2 md:row-span-2 relative aspect-[1/1] md:aspect-[1/2] lg:aspect-[1/1]"
              >
                <CustomImage
                  url={storiesSection.stories[2].url ?? ""}
                  alt={storiesSection.stories[2].alt ?? ""}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="md:col-span-3 md:row-span-1 md:row-start-5 md:col-start-3 bg-gray-200 p-3 flex flex-col gap-3 items-center justify-center"
              >
                <motion.q
                  variants={fadeIn("up", 0.2, 50)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                  className="italic font-semibold"
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: storiesSection.stories[2].quote ?? "",
                    }}
                  />
                </motion.q>
                <motion.p
                  variants={fadeIn("up", 0.3, 70)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                  className="max-w-[90%]"
                >
                  {storiesSection.stories[2].story ?? ""}
                </motion.p>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Tales;
