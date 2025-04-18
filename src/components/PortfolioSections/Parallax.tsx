"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./parallax.module.css";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

interface IPortfolioParallaxImage {
  id: string | number;
  url: string;
  alt?: string;
}

interface IPortfolioParallaxProps {
  images: IPortfolioParallaxImage[];
}

export default function PortfolioParallax({ images }: IPortfolioParallaxProps) {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  // const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
      </div>
    </main>
  );
}

const Column = ({
  images,
  y,
}: {
  images: IPortfolioParallaxImage[];
  y: MotionValue<number>;
}) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((img, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={img.url} alt={img?.alt ?? "image"} fill />
          </div>
        );
      })}
    </motion.div>
  );
};
