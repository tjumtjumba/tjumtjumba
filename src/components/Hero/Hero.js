import Image from "next/image";
import imgBg from "./hero-bg.jpg";
import imgLogo from "./hero-logo.svg";

function Hero() {
  return (
    <div className="relative w-full aspect-video lg:aspect-[16/5] 2xl:aspect-[16/4] bg-[#CE181E] pointer-events-none select-none ">
      <Image
        src={imgBg}
        fill={true}
        alt="Hero background"
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute w-full h-full grid place-items-center p-[50px]">
        <div className="relative w-full h-full max-w-[500px] ">
          <Image
            src={imgLogo}
            fill={true}
            alt="Logo"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
