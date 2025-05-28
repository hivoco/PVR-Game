import Header from "@/components/Header";
import Image from "next/image";
import { Confetti } from "@/components/magicui/confetti";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import ThanksForPlaying from "@/components/ThanksForPlaying";

const Result = () => {
  const [isLost, setIsLost] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasUserWonCoupon, setHasUserWonCoupon] = useState(true);

  const confettiRef = useRef(null);
  useEffect(() => {
    if (confettiRef.current && isLoaded) {
      confettiRef.current?.fire({
        spread: 360,
        startVelocity: 50,
        decay: 0.88,
        gravity: 0.8,
        ticks: 300,
        scalar: 1.2,
        shapes: ["circle", "square", "star", "triangle", "heart"],
        colors: [
          "#ff6b6b",
          "#feca57",
          "#1dd1a1",
          "#54a0ff",
          "#5f27cd",
          "#240604",
        ],
      });
    }
  }, [confettiRef.current, isLoaded]);

  useEffect(() => {
    setIsLoaded(true);

    const value = sessionStorage.getItem("hasUserWonCoupon");
    setHasUserWonCoupon(value ? value : "");
  }, []);

  if (!hasUserWonCoupon) {
    return <ThanksForPlaying />;
  }
  return (
    <>
      <style jsx>
        {`
          .header-animate {
            opacity: 0;
            transform: scale(0.5);
            animation: headerFadeScaleIn 0.6s ease-out forwards;
          }

          @keyframes headerFadeScaleIn {
            0% {
              opacity: 0;
              transform: scale(0.5);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>

      <div className="relative px-6 py-[6vh] overflow-hidden max-w-md text-center mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
        <h1
          className={`text-shadow-[0px_0px_11px_#FFFFFF] font-normal text-[54px] leading-16 text-center
        transition-all duration-1000 ease-in-out    
        ${isLoaded ? "translate-y-0" : "-translate-y-[200%]"}`}
        >
          Congratulations!
        </h1>

        <div
          className={`${isLoaded ? "header-animate" : "opacity-0"} py-[3vh]`}
        >
          <Header text={"YOU'VE WON A COUPON"} className={`!h-[18vh] `} />
        </div>

        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-60 size-full pointer-events-none"
        />

        <Image
          src="/png/pop-corn.png"
          alt="pop-corn"
          width={138}
          height={136}
          priority={true}
          className={`mx-auto
          transition-all duration-1000 ease-in-out
          ${isLoaded ? "translate-y-0" : "translate-y-[200%]"}
            `}
        />

        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-60 size-full pointer-events-none"
        />

        <div
          className={`text-black uppercase relative -mt-4
          transition-all duration-1000 ease-in-out
          ${isLoaded ? "translate-y-0" : "translate-y-[200%]"}
          `}
        >
          <Image
            src="/png/coupon.png"
            alt="pop-corn"
            width={300}
            height={140}
            className="mx-auto w-[80vw] h-auto"
            priority
          />

          <div className="absolute top-1/2 -translate-y-1/2 left-2/5   flex flex-col justify-center items-center">
            <h2 className="text-2xl leading-7 text-center ">pop-coke-2808</h2>

            <h5 className="font-light text-xs leading-3.5 text-center pt-1">
              Please show the code you received
            </h5>
            <h5 className="font-light text-xs leading-3.5 text-center">
              at the counter for your combo.
            </h5>
          </div>
        </div>

        <div
          className={`absolute bottom-[6vh] left-1/2 -translate-x-1/2
          transition-all duration-1000 ease-in-out
          ${isLoaded ? "translate-y-0" : "translate-y-[200%]"}
          `}
        >
          <Button title="CLAIM" />
        </div>

        {/* <div className="relative inline-block">
            <Image
              src="/png/button.png"
              alt="placeholder-square"
              width={210}
              height={80}
              className="block"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h2
                className="text-center text-3xl font-bold text-[#560C0C] leading-16"
                style={{
                  textShadow: `
                0px 0px 3.81px rgba(255, 255, 255, 1),
                0px 0px 7.62px rgba(255, 255, 255, 1)
              `,
                }}
              >
                CLAIM
              </h2>
            </div>
          </div>
      */}
      </div>
    </>
  );
};

export default Result;
