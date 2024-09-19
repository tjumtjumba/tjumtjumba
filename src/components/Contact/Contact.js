import React from "react";
import Image from "next/image";
import Section from "../Section/Section";
import Text, { Heading, Strong } from "../Text/Text";
import imgBg from "./contact-bg.jpg";
import imgAnth from "./anth.jpg";

export default function Contact() {
  return (
    <>
      <Section>
        <header className="mb-8 md:mb-10 lg:mb-12 xl:mb-20">
          <Heading>Contact</Heading>
        </header>
      </Section>

      <Section>
        <div className="grid grid-flow-col gap-3 md:gap-6 lg:gap-9  relative hide-scrollbars overflow-x-scroll scroll-smooth p-3 overflow-hidden">
          <div className="relative aspect-square min-w-[240px] rounded-3xl overflow-hidden bg-[#0f0f0f]">
            <Image
              className="pointer-events-none select-none"
              src={imgBg}
              fill={true}
              alt="background"
              style={{ objectFit: "cover" }}
              priority
            />

            <div className="absolute w-full h-full grid place-content-center text-center">
              {/* <Strong>General Enquiries</Strong>
              <Text className="underline">
                <a href="mailto:hello@tjumtjumba.com.au">
                  hello@tjumtjumba.com.au
                </a>
              </Text>
              <br />
              <br />
              <Strong>Bookings</Strong>
              <Text className="underline">
                <a href="mailto:bookings@tjumtjumba.com.au">
                  bookings@tjumtjumba.com.au
                </a>
              </Text> */}

              <Strong>Instagram</Strong>
              <Text className="underline">
                <a href="https://www.instagram.com/tjumtjumba">@tjumtjumba</a>
              </Text>
            </div>
          </div>

          <div className="relative aspect-square min-w-[240px] rounded-3xl overflow-hidden bg-[#0f0f0f]">
            <Image
              src={imgAnth}
              fill={true}
              alt="Anth"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
