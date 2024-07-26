import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import imgBg from "../About/about-bg.jpg";
import Text from "../Text/Text";

export default function Footer() {
  return (
    <Section
      outerClassName="pb-0 "
      innerClassName="relative h-[80px] md:h-[100px] lg:h-[120px] rounded-tl-3xl rounded-tr-3xl overflow-hidden"
    >
      {/* <div className="relative "> */}
      <Image
        src={imgBg}
        fill={true}
        alt="Background"
        style={{ objectFit: "cover" }}
        priority
      />
      {/* </div> */}

      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 grid place-content-center">
        <Text>&copy; copyright 2024 - Tjum Tjumba</Text>
      </div>
    </Section>
  );
}
