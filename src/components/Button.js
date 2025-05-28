import Image from "next/image";
import React from "react";

const Button = ({title}) => {
  return (
    <div className="relative w-fit mx-auto">
      <Image
        className="block h-[9.8vh] w-auto"
        src="/png/button.png"
        alt="placeholder-square"
        width={210}
        height={80}
        priority={true}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-center text-4xl leading-[1] font-bold text-[#560C0C] "
          style={{
            textShadow: `
        0px 0px 3.81px rgba(255, 255, 255, 1),
        0px 0px 7.62px rgba(255, 255, 255, 1)
      `,
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Button;
