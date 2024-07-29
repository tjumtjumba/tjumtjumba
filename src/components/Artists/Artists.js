"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import smoothscroll from "smoothscroll-polyfill";
import Section from "../Section/Section";
import { Heading, Strong } from "../Text/Text";
import imgArrow from "@/img/arrow-right.svg";
import imgAnimaOmada from "./anima-omada.jpg";
import imgPepeSilvia from "./pepe-silvia.jpg";
import imgBrothers from "./brothers.jpg";
import imgWzzed from "./wzzed.jpg";
import imgFosters from "./fosters.jpg";
import imglewinsky from "./lewinsky.jpg";

export default function Artists() {
  const scrollContainerRef = useRef(null);
  const arrowPrevRef = useRef(null);
  const arrowNextRef = useRef(null);

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  useEffect(() => {
    if (!scrollContainerRef || !arrowPrevRef || !arrowNextRef) {
      return;
    }

    const scrollContainer = scrollContainerRef.current;

    const arrowPrev = arrowPrevRef.current;
    const arrowNext = arrowNextRef.current;

    arrowPrev.addEventListener("click", handleClickPrev);
    arrowNext.addEventListener("click", handleClickNext);

    function handleClickPrev() {
      const scrollLeft = scrollContainer.scrollLeft - calcScrollDistance();
      scrollContainer.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }

    function handleClickNext() {
      const scrollLeft = scrollContainer.scrollLeft + calcScrollDistance();
      scrollContainer.scroll({
        left: scrollLeft,
        behavior: "smooth",
      });
    }

    function calcScrollDistance() {
      const w = window.innerWidth;
      const distanceObj = {
        sm: 180 + 12,
        md: 240 + 24,
        lg: 340 + 36,
      };

      let mq;
      if (w < 769) mq = "sm";
      if (w > 768 && w < 1025) mq = "md";
      if (w > 1024) mq = "lg";

      const distance = distanceObj[mq];

      return distance;
    }

    return () => {
      arrowPrev.removeEventListener("click", handleClickPrev);
      arrowNext.removeEventListener("click", handleClickNext);
    };
  }, []);

  return (
    <>
      <Section>
        <header className="flex place-content-between items-end mb-8 md:mb-10 lg:mb-12 xl:mb-20">
          <Heading>Artists</Heading>
          <div className="flex gap-6">
            <button
              ref={arrowPrevRef}
              className="relative w-[40px] h-[40px] rotate-180"
            >
              <Image
                src={imgArrow}
                fill={true}
                alt="arrow right"
                style={{ objectFit: "cover" }}
                priority
              />
            </button>
            <button ref={arrowNextRef} className="relative w-[40px] h-[40px]">
              <Image
                src={imgArrow}
                fill={true}
                alt="arrow right"
                style={{ objectFit: "cover" }}
                priority
              />
            </button>
          </div>
        </header>
      </Section>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 z-20  h-full bg-gradient-to-r from-black"
          style={{
            width: "calc(50vw - min(1680px, 1400px)/2 - 12px)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0  z-20  h-full bg-gradient-to-l from-black"
          style={{
            width: "calc(50vw - min(1680px, 1400px)/2 - 12px)",
          }}
        />

        <div
          ref={scrollContainerRef}
          className="relative hide-scrollbars overflow-x-scroll scroll-smooth p-3 overflow-hidden"
        >
          <div
            className=" w-[fit-content]"
            style={{
              padding: "0 calc(50vw - min(1680px, 1400px)/2 - 12px)",
            }}
          >
            <div className="grid grid-flow-col gap-3 md:gap-6 lg:gap-9">
              <Artist title="Anima Omada" img={imgAnimaOmada} />
              <Artist title="Pepe Silvia" img={imgPepeSilvia} />
              <Artist title="Brothers" img={imgBrothers} />
              <Artist title="Wzzed" img={imgWzzed} />
              <Artist title="Fosters" img={imgFosters} />
              <Artist title="Lewinsky" img={imglewinsky} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Artist(props) {
  return (
    <div
      className={`relative w-[180px] md:w-[240px] lg:w-[340px] aspect-[5/7] rounded-3xl overflow-hidden ${props.className} bg-[#0f0f0f]`}
    >
      <Image
        src={props.img}
        fill={true}
        alt={props.title}
        style={{ objectFit: "cover" }}
        priority
      />
      <Strong className="absolute py-3 px-6 md:py-4 md:px-7 z-10 bottom-0">
        {props.title}
      </Strong>
    </div>
  );
}
