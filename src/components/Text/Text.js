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
      className={`text-[#FEBC0F] text-base md:text-lg lg:text-xl 2xl:text-2xl text-balance ${
        dinCondensed.className
      } ${props.className ?? ""}`}
    >
      {props.children}
    </Outer>
  );
}

export function Strong(props) {
  return <Text className={dinCondensedBold.className}>{props.children}</Text>;
}

export function Heading(props) {
  const Outer = props.as || "h1";
  return (
    <Outer
      className={`text-[#FEBC0F] text-xl md:text-2xl lg:text-3xl xl:text-4xl bold ${arialBlack.className}`}
    >
      {props.children}
    </Outer>
  );
}
