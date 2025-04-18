"use client";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../framer-variants";

interface ISectionHeadProps {
  text: string;
  tagline?: string;
}

function SectionHead({ text, tagline }: ISectionHeadProps) {
  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="w-full max-w-[360px] mx-auto mb-10 mdl:max-w-[400px] mdl:mb-0 2xl:max-w-[700px]"
    >
      <h2 className="text-[25px] 2xl:text-[36px] font-bold text-center">
        {text}
      </h2>
      <p
        className="text-[14px] mdl:text-[16px] text-center mt-1 max-w-[375px] 
        mx-auto 2xl:text-[22px] 2xl:max-w-full"
      >
        {tagline}
      </p>
    </motion.div>
  );
}

export default SectionHead;
