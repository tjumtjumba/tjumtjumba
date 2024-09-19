import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import Text, { Heading } from "../Text/Text";
// import imgArrow from "@/img/arrow-right.svg";
// import videoLaunchParty from "./launch-event.mp4";
import imgWzzedSingle from "./wzzed-single-release.jpg";
// import videoBergSingle from "./berg-single-release.mp4";

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

      <Section>
        <div className="grid grid-flow-col gap-3 md:gap-6 lg:gap-9  relative hide-scrollbars overflow-x-scroll scroll-smooth p-3 overflow-hidden">
          <div className="relative aspect-square min-w-[240px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-3xl overflow-hidden bg-[#0f0f0f]">
              <video autoPlay muted loop width="100%">
                <source src="/berg-single-release.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="relative aspect-square min-w-[240px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-3xl overflow-hidden bg-[#0f0f0f]">
              <Image
                src={imgWzzedSingle}
                fill={true}
                alt="Wzzed Single Launch - Carlton Club - 1st September 2024"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="relative aspect-square min-w-[240px]">
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-3xl overflow-hidden bg-[#0f0f0f]">
              <video autoPlay muted loop width="100%">
                <source src="/launch-event.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
