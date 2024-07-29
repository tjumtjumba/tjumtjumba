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
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 lg:gap-12">
          <div className="relative aspect-video md:aspect-square md:w-1/2 rounded-3xl overflow-hidden bg-[#0f0f0f]">
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

          <div className="relative hidden md:block aspect-square md:w-1/2 rounded-3xl overflow-hidden bg-[#0f0f0f] pointer-events-none select-none">
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
