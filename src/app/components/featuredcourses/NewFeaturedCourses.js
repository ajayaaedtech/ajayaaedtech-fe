"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback, useState } from "react";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";
import img6 from "./images/6.png";
import img7 from "./images/7.jpg";
import img07 from "./images/7.png";
import img8 from "./images/8.png";
import img9 from "./images/9.png";
import img10 from "./images/10.png";

export default function NewFeaturedCourses() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })] // ⏱ Auto-scroll every 2 sec
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6, img7, img07, img8, img9, img10];

  const restartAutoplay = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.play();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("pointerUp", restartAutoplay);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("pointerUp", restartAutoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, restartAutoplay]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-lg font-semibold text-gray-600 tracking-widest mb-8 text-center">
          FEATURED SOFTWARE COURSES
        </h2>

        {/* === Carousel Section === */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] px-1 p-1"
                style={{ width: "200px", height: "200px" }}
              >
                <div className="w-full h-full rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                  <Image
                    src={img}
                    alt={`Course ${index + 1}`}
                    width={200}
                    height={200}
                    className="rounded-2xl object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Dots Indicator === */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${selectedIndex === index
                  ? "bg-indigo-500 scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-10 h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm"></div>
      </div>
    </section>
  );
}
