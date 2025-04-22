import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { BsThreads } from "react-icons/bs";
import { footerContent } from "@/Constants/contact";

function Footer() {
  return (
    <footer
      id="contact"
      className="text-white mt-5 bg-[#1E1E1E] | lg:min-h-max lg:pb-7 |"
    >
      <div className="py-8 md:py-10">
        <div className="w-full flex flex-col md:justify-center md:items-center">
          <h3
            className="text-[25px] font-bold | md:text-[25px] xl:text-[32px] 2xl:text-[34px] 4xl:text-[40px] text-white/80 text-center"
            dangerouslySetInnerHTML={{ __html: footerContent.title }}
          />
          <div className="w-[90%] h-[1.1px] bg-white/30 mt-5 self-center" />
        </div>

        <div className="grid md:grid-cols-3 gap-10 pt-10 pl-6 | md:gap-2 md:pl-0 md:justify-items-center">
          <div className="font-poppins text-sm">
            <p className="">{footerContent.companyName}</p>
            <div className="pt-4 flex flex-col gap-4 text-xs font-light text-white/80">
              {/* <p>Building, Address 1</p>
              <p>Street, Address 2</p> */}
              {footerContent?.address?.map((item) => (
                <p key={item.id}>{item.lineContent}</p>
              ))}
            </div>
          </div>

          <div className="font-poppins text-sm">
            <p className="">Get In Touch</p>
            <div className="pt-4 flex flex-col gap-4 text-xs font-light text-white/80">
              <p>Connect with India&apos;s Best</p>
              <a
                className="font-semibold"
                href="mailto:test@gmail.com"
              >
                {footerContent?.contacts?.email ?? ""}
              </a>
               
              <p className="font-semibold">
                {footerContent?.contacts?.mobile ?? ""}
              </p>
            </div>
          </div>

          <div className="font-poppins text-sm w-fit">
            <p className="">Company Delhi</p>
            <div className="pt-4 flex gap-4 text-xs font-light text-white/80 items-center justify-around">
              <a
                href={
                  footerContent?.socialLinks?.instagram ??
                  "https://www.instagram.com/"
                }
              >
                <BsInstagram className="w-6 h-6" />
              </a>
              <a
                href={
                  footerContent?.socialLinks?.youtube ??
                  "https://www.youtube.com/"
                }
              >
                <FiYoutube className="w-7 h-7" />
              </a>
              <a
                href={
                  footerContent?.socialLinks?.threads ??
                  "https://www.threads.net/"
                }
              >
                <BsThreads className="w-7 h-7" />
              </a>
              <a
                href={
                  footerContent?.socialLinks?.facebook ??
                  "https://www.facebook.com/"
                }
              >
                <CiFacebook className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-col pb-5 justify-center items-center gap-2 mt-8 text-sm |
       md:justify-around md:flex-row"
      >
        <p className="">............</p>
        <p className="">
          Designed & Developed By <a className="underline">Testing</a> &{" "}
          <a className="underline">Jitu</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
