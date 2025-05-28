import Image from "next/image";
import React, { useState } from "react";

function OverInput({ image, placeholder, value, onChange, type = "text" }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <style jsx>{`
        /* Make the Next/Image wrapper <span> overflow:visible so the shadow can show. */
        .imgContainer :global(span) {
          overflow: visible !important;
        }

        /* Define your glow */
        .glow {
          box-shadow: 0px 0px 4px rgba(255, 255, 255, 1),
            0px 0px 8px rgba(255, 255, 255, 1);
          transition: box-shadow 0.3s ease-in-out;
        }

        /* Tweak the input’s focus outline if you like */
        .inputField:focus {
          outline: none;
        }
      `}</style>

      <div
       
        className="imgContainer relative w-full"
      >
        <Image
        
          src={image}
          alt={`${placeholder} input field`}
          width={0}
          height={0}
          sizes="100vw"
          className={`w-full h-[80px] object-contain transition-all duration-300 ${
            isFocused ? "glow" : ""
          }`}
        />

        <div  className="absolute inset-0 flex items-center justify-center px-4">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="inputField w-full max-w-[280px] text-white text-center text-2xl bg-transparent border-none placeholder-white/70"
          />
        </div>
      </div>
    </>
  );
}

export default OverInput;
