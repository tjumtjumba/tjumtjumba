import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import imgBg from "../About/about-bg.jpg";
import Text from "../Text/Text";

export default function Footer() {
  return (
    <div className="px-3 2xl:px-12">
      <div className="relative h-[80px] md:h-[100px] lg:h-[120px] rounded-tl-3xl rounded-tr-3xl overflow-hidden pointer-events-none select-none">
        <Image
          src={imgBg}
          fill={true}
          alt="Background"
          style={{ objectFit: "cover" }}
          priority
        />

        <div className="absolute top-0 right-0 bottom-0 left-0 z-10 grid place-content-center">
          <Text className="text-white">
            &copy; copyright 2024 - Tjum Tjumba
          </Text>
        </div>
      </div>
    </div>
  );
}
