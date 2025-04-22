"use client";
import { motion } from "framer-motion"; 
import React, { useState } from "react";
import { fadeIn, opacity } from "../framer-variants";
import CustomImage from "../PortfolioSections/CustomImage";
import { aboutSectionContent } from "@/Constants/about";

function About() {
const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("Sending...");

  try {    
    const res = await fetch("https://apidocs.womenlisted.com/api/contactEnquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus(result.message || "Form submitted successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Submission failed.");
    }
  } catch (error) {
    console.error(error);
    setStatus("An error occurred.");
  }
};
  
  return (
    <section id="about" className="px-2 md:px-6 xl:my-20">
      <div>



<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
    <h2 className="text-2xl font-bold text-gray-700">Contact Us</h2>

    <div>
      <label className="block text-sm font-medium text-gray-600">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="John Doe"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium text-gray-600">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="john@example.com"
        required
      />
    </div>

     <div>
      <label className="block text-sm font-medium text-gray-600">Phone</label>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="6767767676"
        required
      />
    </div>
     <div>
      <label className="block text-sm font-medium text-gray-600">Message</label>
      <input
        type="text"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Test Message"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
    >
      Send Message
    </button>

    {status && <p className="text-sm text-center text-green-600">{status}</p>}
  </form>
</div>




        
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
