"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { LogoName, menu } from "@/Constants/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="font-aladin text-[22px] max-w-5 md:max-w-full lg:text-[37px] absolute top-5 left-5 z-20 text-text-light">
        {LogoName}
      </div>

      <div
        className={`absolute top-5 right-5 z-[25] ${
          open ? "text-text-dark" : "text-text-light cursor-pointer"
        }`}
      >
        {!open && (
          <BiMenuAltRight
            className="text-4xl self-end"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      <nav
        className={`fixed top-0  flex gap-5 flex-col z-20 bg-text-light w-2/3 lg:w-2/5 h-screen 
        rounded-bl-[50%] transition-all duration-500 ${
          open ? "right-0" : "-right-[150vh]"
        }`}
      >
        {open && (
          <MdClose
            className="text-3xl self-end absolute top-5 right-5 z-[25] text-text-dark cursor-pointer"
            onClick={() => setOpen(false)}
          />
        )}
        <ul className="flex flex-col h-full items-center my-32 gap-10">
          {menu?.map((item) => (
            <li
              className="font-poppins lg:text-[22px] hover:font-semibold"
              key={item.id}
            >
              <Link href={item.link} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
