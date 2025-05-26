// import Image from 'next/image'
// import React from 'react'

// function OverText({image,text}) {
//   return (
//     <div className="relative inline-block ">
//          <Image
//            src={image}
//            alt="Description"
//            width={327}
//            height={130}
//            className="block"
//          />
//          <div className="absolute inset-0 flex items-center justify-center">
//            <h2
//              className="text-white  text-center text-4xl bg-transparent"
//              style={{
//                textShadow: `
//                  0px 0px 3.81px rgba(255, 255, 255, 1),
//                  0px 0px 7.62px rgba(255, 255, 255, 1)
//                `,
//              }}
//            >
//              {text}
//            </h2>
//          </div>
//        </div>
//   )
// }

// export default OverText

import Image from "next/image";
import React from "react";

function OverText({ image, text }) {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt={`${text} button`}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-[80px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-white text-center text-2xl font-bold bg-transparent"
          style={{
            textShadow: `
              0px 0px 3.81px rgba(255, 255, 255, 1),
              0px 0px 7.62px rgba(255, 255, 255, 1)
            `,
          }}
        >
          {text}
        </h2>
      </div>
    </div>
  );
}

export default OverText;