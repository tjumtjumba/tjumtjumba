import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import Text, { Heading } from "../Text/Text";
import imgArrow from "@/img/arrow-right.svg";
import imgEvent from "./event.jpg";

export default function Events() {
  const eventHref =
    "https://events.humanitix.com/tjum-tjumba-launch-fundraiser";
  return (
    <>
      <Section>
        <header className="flex place-content-between">
          <Heading>Events</Heading>
          <Text className="">
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
          </Text>
        </header>
      </Section>

      <Section innerClassName="relative aspect-video">
        <a
          href={eventHref}
          className="absolute top-0 right-0 bottom-0 left-0 block rounded-3xl overflow-hidden border-[red]"
        >
          <Image
            src={imgEvent}
            fill={true}
            alt="Launch party"
            style={{ objectFit: "cover" }}
            priority
          />
        </a>
      </Section>
    </>
  );
}
