import React from "react";

interface ISubSectionHeadProps {
  text: string;
  tagline?: string;
  className?:string;
}

function SubSectionHead({ text, tagline, className }: ISubSectionHeadProps) {
  return (
    <div className={` ${className}`}>
      <h3 className="text-[25px] font-bold | md:text-[25px] xl:text-[30px] 2xl:text-[32px] 4xl:text-[40px]">{text}</h3>
      {tagline && <p className="text-[16px] mt-1 max-w-[375px] mx-auto">{tagline}</p>}
    </div>
  );
}

export default SubSectionHead;
