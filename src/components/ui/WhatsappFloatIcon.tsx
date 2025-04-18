"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { footerContent } from "@/Constants/contact";

const WhatsappButton = () => {
  const phoneNumber = footerContent?.contacts?.whatsapp ?? "";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 lg:right-7 lg:bottom-7 bg-green-500 text-white p-2 lg:p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsappButton;
