import Image from "next/image";
import React from "react";

function CustomImage({ url, alt, className, fill=true }: { url: string; alt: string, className?:string, fill?:boolean }) {
  return (
    <Image src={url} alt={alt} fill objectFit="cover" className={`h-auto ${className}`} />
  );
}

export default CustomImage;
