"use client";

import Image from "next/image";
import { Carousel } from "flowbite-react";

const imgs = [
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    alt: "img1",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    alt: "img2",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    alt: "img3",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
    alt: "img4",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
    alt: "img5",
  },
];

export default function CustomCarousel() {
  return (
    <Carousel className="border-4 border-blue-900" >
      {imgs.map((img, idx) => (
        <Image
          src={img.src}
          alt={img.alt}
          width={800}
          height={400}
          key={idx}
        />
      ))}
    </Carousel>
  );
}