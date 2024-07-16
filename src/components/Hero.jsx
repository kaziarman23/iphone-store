import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  function handleVideoSetSrc() {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleVideoSetSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSetSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 1.2,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.5,
    });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-20 w-full flex-center flex-col">
        {" "}
        {/* changed some height*/}
        <p id="hero" className="hero-title">
          Iphone 15 pro
        </p>
      </div>
      <div className=" mx-auto md:w-10/12 w-9/12">
        {" "}
        {/*centerd this div*/}
        <video
          className="pointer-events-none"
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
}

export default Hero;
