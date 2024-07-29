import React from "react";
import localFont from "next/font/local";

const dinCondensed = localFont({
  src: "../../fonts/dincondensed-webfont.woff2",
  display: "swap",
});

const dinCondensedBold = localFont({
  src: "../../fonts/dincondensed-bold-webfont.woff2",
  display: "swap",
});

const arialBlack = localFont({
  src: "../../fonts/arial_black-webfont.woff2",
  display: "swap",
});

export default function Text(props) {
  const Outer = props.as || "p";
  return (
    <Outer
      className={`text-[#FEBC0F] text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-balance ${dinCondensed.className} ${props.className}`}
    >
      {props.children}
    </Outer>
  );
}

export function Strong(props) {
  return (
    <Text className={`${dinCondensedBold.className} ${props.className}`}>
      {props.children}
    </Text>
  );
}

export function Heading(props) {
  const Outer = props.as || "h1";
  return (
    <Outer
      className={`text-[#FEBC0F] text-2xl md:text-3xl lg:text-4xl xl:text-5xl bold ${arialBlack.className}`}
    >
      {props.children}
    </Outer>
  );
}
