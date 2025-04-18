"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn, opacity } from "../framer-variants";
import CustomImage from "../PortfolioSections/CustomImage";
import { aboutSectionContent } from "@/Constants/about";

function About() {
  return (
    <section id="about" className="px-2 md:px-6 xl:my-20">
      <div>
        <div className="text-[#981A1A] font-bold text-2xl flex flex-row gap-2 justify-center items-center lg:text-3xl xl:text-4xl xl:pb-10">
          <motion.div
            variants={fadeIn("up", 0.2, 50)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            {aboutSectionContent.title}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 py-3 gap-5 | md:grid-cols-2 md:text-right  md:pr-5 md:py-5 ">
          <motion.div
            variants={opacity(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="relative aspect-[2/1.5] md:aspect-[1/1.4] lg:aspect-[1/1.7] max-h-[80vh] w-full"
          >
            <CustomImage
              url={aboutSectionContent.profileImage.url}
              alt={aboutSectionContent.profileImage.url}
              className=""
            />
          </motion.div>

          <div className="flex flex-col gap-5 md:gap-10 xl:max-w-md max-h-[700px] md:justify-self-center | lg:text-2xl | 2xl:max-w-xl 2xl:max-h-[1000px]">
            <div className="md:pt-5">
              <motion.p
                variants={fadeIn("up", 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="font-semibold italic"
              >
                {aboutSectionContent.profileContent.q1}
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.2, 80)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="font-semibold italic"
              >
                {aboutSectionContent.profileContent.q2}
              </motion.p>
            </div>

            <div className="text-sm flex flex-col gap-4 md:justify-between h-full md:pb-5 | lg:text-xl | 2xl:text-2xl">
              {aboutSectionContent.profileContent.notes?.map((note, index) => (
                <motion.p
                  key={index}
                  variants={fadeIn("up", 0.2, 80)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                  className=""
                  dangerouslySetInnerHTML={{ __html: note }}
                />
              ))}

              <div>
                <motion.p
                  variants={fadeIn("up", 0.2, 80)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                  className="font-sacramento"
                >
                  {aboutSectionContent.profileContent.author}
                </motion.p>
                <motion.p
                  variants={fadeIn("up", 0.2, 80)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }}
                  className="font-aladin"
                >
                  {aboutSectionContent.profileContent.companyName}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
