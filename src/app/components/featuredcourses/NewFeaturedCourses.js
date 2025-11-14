"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useCallback, useState } from "react";

export default function NewFeaturedCourses() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // === Inline SVG + Names ===
  const courses = [
    {
      name: "HTML",
      icon: (
        <svg
          viewBox="0 0 108.35 122.88"
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#E44D26"
            fillRule="evenodd"
            clipRule="evenodd"
            points="108.35,0 98.48,110.58 54.11,122.88 9.86,110.6 0,0"
          />
          <polygon
            fill="#F16529"
            fillRule="evenodd"
            clipRule="evenodd"
            points="54.17,113.48 90.03,103.54 98.46,9.04 54.17,9.04"
          />
          <path
            fill="#EBEBEB"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.99,36.17h19.19V22.61H20.16l0.32,3.64l3.33,37.38h30.35V50.06H36.23L34.99,36.17z
           M38.04,70.41H24.43l1.9,21.3l27.79,7.71V85.29l-15.11-4.08L38.04,70.41z"
          />
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.13,63.63h16.7l-1.57,17.59L54.13,85.3v14.11l27.81-7.71l3.39-37.99h-31.2V63.63z
           M54.13,36.14h32.76l1.21-13.57H54.13V36.14z"
          />
        </svg>
      ),
    },

    {
      name: "CSS",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 296297 333333"
          className="w-16 h-16"
        >
          <defs>
            <linearGradient id="id4" gradientUnits="userSpaceOnUse" x1="54128.7" y1="79355.5" x2="240318" y2="79355.5">
              <stop offset="0" stopColor="#e8e7e5" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>

            <linearGradient id="id5" gradientUnits="userSpaceOnUse" x1="62019.3" y1="202868" x2="233515" y2="202868">
              <stop offset="0" stopColor="#e8e7e5" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>

            <linearGradient id="id6" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021">
              <stop offset="0" stopColor="#d1d3d4" />
              <stop offset=".388" stopColor="#d1d3d4" />
              <stop offset="1" stopColor="#d1d3d4" />
            </linearGradient>

            <linearGradient id="id7" gradientUnits="userSpaceOnUse" x1="194179" y1="61185.8" x2="194179" y2="135407">
              <stop offset="0" stopColor="#d1d3d4" />
              <stop offset=".388" stopColor="#d1d3d4" />
              <stop offset="1" stopColor="#d1d3d4" />
            </linearGradient>

            <mask id="id0">
              <linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset=".388" stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".831" />
              </linearGradient>
              <path fill="url(#id1)" d="M61737 99467h86453v71704H61737z" />
            </mask>

            <mask id="id2">
              <linearGradient id="id3" gradientUnits="userSpaceOnUse" x1="194179" y1="61185.8" x2="194179" y2="135407">
                <stop offset="0" stopColor="#fff" stopOpacity="0" />
                <stop offset=".388" stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".831" />
              </linearGradient>
              <path fill="url(#id3)" d="M147890 61036h92578v74521h-92578z" />
            </mask>
          </defs>

          <g>
            <path fill="#2062af" d="M268517 300922l-120369 32411-120371-32411L0 0h296297z" />
            <path fill="#3c9cd7" d="M148146 24374v283109l273 74 97409-26229 22485-256954z" />

            <path fill="#fff" d="M148040 99617l-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z" />

            <path mask="url(#id0)" fill="url(#id6)" d="M61887 135497l2857 35524 83295-35614V99617z" />

            <path mask="url(#id2)" fill="url(#id7)" d="M240318 61186l-92278 38431v35790l88604-37883z" />

            <path fill="url(#id5)" d="M62019 135497l2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z" />

            <path fill="#0000000D" d="M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022l-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z" />

            <path fill="url(#id4)" d="M54129 61186h186189l-3674 36339H58620l-4491-36339z" />

            <path fill="#0000000D" d="M148040 61186H54129l4491 36339h89420z" />
          </g>
        </svg>
      ),
    }
    ,

    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 128 128" className="w-16 h-16">
          <path fill="#F7DF1E" d="M0 0h128v128H0z" />
          <path d="M48 104l6-4c2 4 4 7 9 7 4 0 7-2 7-7V56h10v44c0 12-7 18-17 18-9 0-15-4-19-10z" />
          <path d="M88 103l6-4c2 4 4 7 9 7 4 0 7-2 7-7 0-5-3-7-8-9l-4-1c-9-4-13-9-13-17 0-11 8-18 21-18 9 0 15 3 19 10l-6 4c-2-4-4-7-9-7-4 0-6 2-6 6 0 4 2 6 7 8l4 1c10 4 14 9 14 18 0 12-9 18-22 18-10 0-17-4-21-10z" />
        </svg>
      ),
    },

    {
      name: "React",
      icon: (
        <svg viewBox="0 0 128 128" className="w-16 h-16">
          <circle cx="64" cy="64" r="12" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="6" fill="none">
            <ellipse rx="56" ry="24" cx="64" cy="64" transform="rotate(60 64 64)" />
            <ellipse rx="56" ry="24" cx="64" cy="64" transform="rotate(120 64 64)" />
            <ellipse rx="56" ry="24" cx="64" cy="64" />
          </g>
        </svg>
      ),
    },

    {
      name: "Angular",
      icon: (
        <svg viewBox="0 0 250 250" className="w-16 h-16">
          <polygon fill="#DD0031" points="125,0 0,45 20,200 125,250 230,200 250,45" />
          <polygon fill="#C3002F" points="125,30 40,70 55,185 125,220 195,185 210,70" />
          <path fill="#FFF" d="M125 60l45 120h-25l-8-25h-30l-8 25H70l45-120zm0 40l-10 30h20z" />
        </svg>
      ),
    },

    {
      name: "Node js",
      icon: (
        <svg
          viewBox="0 0 109 122.88"
          className="w-16 h-16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#689F63"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M68.43,87.08c-19.7,0-23.83-9.04-23.83-16.63c0-0.72,0.58-1.3,1.3-1.3h5.82
      c0.64,0,1.18,0.47,1.28,1.1c0.88,5.93,3.49,8.92,15.41,8.92c9.49,0,13.52-2.14,13.52-7.18c0-2.9-1.15-5.05-15.89-6.49
      c-12.33-1.22-19.95-3.93-19.95-13.8c0-9.08,7.66-14.49,20.5-14.49c14.42,0,21.56,5,22.46,15.76c0.03,0.37-0.1,0.73-0.35,1
      c-0.25,0.26-0.6,0.42-0.96,0.42H81.9c-0.61,0-1.14-0.43-1.26-1.01c-1.41-6.23-4.81-8.23-14.07-8.23c-10.36,0-11.56,3.61-11.56,6.31
      c0,3.28,1.42,4.24,15.4,6.09c13.84,1.84,20.41,4.43,20.41,14.16c0,9.81-8.18,15.43-22.45,15.43H68.43z M54.52,122.88
      c-1.65,0-3.28-0.43-4.72-1.26l-15.03-8.9c-2.25-1.26-1.15-1.7-0.41-1.96c2.99-1.05,3.6-1.28,6.8-3.1c0.34-0.19,0.78-0.12,1.12,0.08
      l11.55,6.85c0.42,0.23,1.01,0.23,1.4,0l45.03-25.99c0.42-0.24,0.69-0.72,0.69-1.22V35.43c0-0.52-0.27-0.98-0.7-1.24L55.23,8.22
      c-0.42-0.25-0.97-0.25-1.39,0l-45,25.97c-0.44,0.25-0.71,0.73-0.71,1.23v51.96c0,0.5,0.27,0.97,0.7,1.21l12.33,7.12
      c6.69,3.35,10.79-0.6,10.79-4.56V39.86c0-0.73,0.57-1.3,1.31-1.3h5.7c0.71,0,1.3,0.56,1.3,1.3v51.31
      c0,8.93-4.87,14.05-13.33,14.05c-2.6,0-4.66,0-10.38-2.82L4.72,95.59C1.8,93.9,0,90.75,0,87.38V35.42c0-3.38,1.8-6.54,4.72-8.21
      l45.07-26c2.85-1.61,6.64-1.61,9.47,0l45.02,26.01c2.91,1.68,4.72,4.82,4.72,8.21v51.96c0,3.37-1.81,6.51-4.72,8.21l-45.02,26
      c-1.44,0.83-3.08,1.26-4.74,1.26H54.52z"
          />
        </svg>
      ),


    },

    {
      name: "Spring Boot",
      icon: (
        <svg viewBox="0 0 256 256" className="w-16 h-16">
          <path fill="#6DB33F" d="M128 0l112 64v128l-112 64L16 192V64z" />
          <path fill="#fff" d="M128 70c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58z" />
        </svg>
      ),
    },

    {
      name: "Salesforce",
      icon: (
        <svg viewBox="0 0 256 256" className="w-16 h-16">
          <circle cx="80" cy="128" r="50" fill="#00A1E0" />
          <circle cx="150" cy="110" r="60" fill="#00A1E0" />
          <circle cx="180" cy="150" r="45" fill="#00A1E0" />
        </svg>
      ),
    },
  ];

  // === Autoplay restart ===
  const restartAutoplay = useCallback(() => {
    if (emblaApi) {
      const autoplay = emblaApi.plugins()?.autoplay;
      autoplay?.play();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

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

        <h2 className="text-lg font-semibold text-gray-600 tracking-widest mb-10 text-center">
          FEATURED SOFTWARE COURSES
        </h2>

        {/* === Carousel === */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {courses.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_auto] p-2"
                style={{ width: "180px", height: "180px" }}
              >
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center">
                  {item.icon}

                  <p className="mt-4 text-sm font-semibold text-gray-700 tracking-wide">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === Dots === */}
        <div className="flex justify-center mt-6 space-x-2">
          {courses.map((_, index) => (
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

        {/* Decorative line */}
        <div className="mt-10 h-1 w-24 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-sm"></div>
      </div>
    </section>
  );
}
