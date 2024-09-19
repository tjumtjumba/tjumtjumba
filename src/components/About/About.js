import React from "react";

import imgBg from "./about-bg.jpg";
import imgBraj from "./about-braj.png";
import Section from "../Section/Section";
import Image from "next/image";
import Text from "../Text/Text";

export default function About() {
  return (
    <Section innerClassName="relative ">
      <div className="absolute top-0 right-0 bottom-0 left-0 rounded-3xl overflow-hidden bg-[#0f0f0f] pointer-events-none select-none">
        <Image
          src={imgBg}
          fill={true}
          alt="Braj kangaroo"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="relative lg:aspect-[16/6]">
        <div className="h-full md:max-w-[50%] md:ml-auto text-[#FEBC0F] p-6 md:p-9 lg:p-12 grid place-items-center ">
          <div className="h-full grid place-items-center max-w-[400px] md:max-w-[680px]">
            <Text className="text-balance text-center md:text-left">
              <strong>Tjum Tjumba</strong>, an innovative music and events
              company with a deep commitment to supporting and uplifting First
              Nations people and their cultures. <br />
              <br />
              We stand at the intersection of creativity, community, and
              cultural preservation, aiming to amplify indigenous voices and
              celebrate their rich heritage through music, art, and events.
            </Text>
          </div>
          {/* <p className="underline mt-6">Read more</p> */}
        </div>

        <div className="relative h-[200px] mx-auto md:absolute md:bottom-0 md:w-[50%] md:h-[120%] pointer-events-none select-none">
          <Image
            src={imgBraj}
            fill={true}
            alt="Braj kangaroo"
            style={{ objectFit: "contain", objectPosition: "bottom center" }}
            priority
          />
        </div>
      </div>
    </Section>
  );
}
