import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import Text, { Heading } from "../Text/Text";
// import imgArrow from "@/img/arrow-right.svg";
import imgEventMobile from "./wzzed-single-release-portrait.jpg";
import imgEvent from "./wzzed-single-release-landscape.jpg";

export default function Events() {
  const eventHref =
    "https://events.humanitix.com/tjum-tjumba-launch-fundraiser";
  return (
    <>
      <Section>
        <header className="flex place-content-between items-end mb-8 md:mb-10 lg:mb-12 xl:mb-20">
          <Heading>Events</Heading>
          {/* <Text>
            <a href={eventHref} className="flex items-center gap-3">
              <span className="underline">Tickets</span>
              <span className="relative block w-[40px] h-[40px]">
                <Image
                  src={imgArrow}
                  fill={true}
                  alt="arrow right"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </span>
            </a>
          </Text> */}
        </header>
      </Section>

      <Section innerClassName="relative aspect-[9/12] md:aspect-[16/11]">
        <div className="absolute top-0 right-0 bottom-0 left-0 rounded-3xl overflow-hidden bg-[#0f0f0f]">
          <Image
            className="md:hidden"
            src={imgEventMobile}
            fill={true}
            alt="Wzzed Single Launch - Carlton Club - 1st September 2024"
            style={{ objectFit: "cover" }}
          />
          <Image
            className="hidden md:block"
            src={imgEvent}
            fill={true}
            alt="Wzzed Single Launch - Carlton Club - 1st September 2024"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Section>
    </>
  );
}
