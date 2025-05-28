"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Confetti } from "@/components/magicui/confetti";
import { useRef } from "react";

const QuizOverlay = ({ isOptionCorrect }) => {
  const confettiRef = useRef(null);
  useEffect(() => {
    if (confettiRef.current && isOptionCorrect) {
      confettiRef.current?.fire({
        spread: 360,
        startVelocity: 50,
        decay: 0.88,
        gravity: 0.5,
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
  }, [isOptionCorrect, confettiRef.current]);

  return (
    <div className="flex justify-center items-center h-svh relative">
      
      {isOptionCorrect && (
        <Confetti
          ref={confettiRef}
          className="absolute left-0 top-0 z-60 size-full pointer-events-none"
        />
      )}

      <Image
        width={306}
        height={306}
        className="relative z-40"
        alt="overlay answer check"
        src={"/quiz/pvr-wireframe.png"}
        priority
      />
      <div className="absolute flex flex-col items-center gap-3.5 z-50 text-2xl font-medium text-center align-middle">
        <h3
          style={{
            textShadow: "0px 0px 12px #FFFFFF",
            fontSize: isOptionCorrect ? "60px" : "50px",
            lineHeight: isOptionCorrect ? "72px" : "62px",
          }}
          className={`font-normal text-6xl leading-[72px] align-middle text-center`}
        >
          {isOptionCorrect ? "WOHOO!" : "Ah, not quite!"}
        </h3>

        <section>
          <h5>{isOptionCorrect ? "That’s the" : "Give the next one"}</h5>

          <h5>{isOptionCorrect ? "right answer!" : "a shot!"}</h5>
        </section>

        {!isOptionCorrect && (
          <Image
            width={80}
            height={44}
            className=""
            alt="overlay answer check"
            src={"/quiz/arrow.png"}
            priority
          />
        )}
      </div>
      <div className="absolute inset-0 bg-white/15 backdrop-blur-[6px] w-full h-full "></div>
    </div>
  );
};

export default QuizOverlay;
