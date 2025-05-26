// import Image from "next/image";

// import Header from "@/components/Header";
// import OverText from "@/components/OverText";

// export default function Home() {
//   return (
//     <div className="relative px-6 py-14 max-w-md text-center  mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
//       <Header text={"PLAY N WIN COUPONS"} />
//       <section id="square" className="py-5">
//         <div className="flex gap-5 justify-center">
//           {/* First Square */}
//           <div className="relative flex-1 max-w-[150px]">
//             <Image
//               src="/png/placeholder-square.png"
//               alt="popcorn combos counter"
//               width={0}
//               height={0}
//               sizes="(max-width: 768px) 45vw, 150px"
//               className="w-full h-auto aspect-square object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="flex flex-col justify-center items-center h-full gap-1">
//                 <h2
//                   className="text-white text-center text-7xl font-medium leading-none"
//                   style={{
//                     textShadow: `
//                 0px 0px 3.81px rgba(255, 255, 255, 1),
//                 0px 0px 7.62px rgba(255, 255, 255, 1)
//               `,
//                   }}
//                 >
//                   6
//                 </h2>
//                 <strong className="text-white text-center text-base font-medium bg-transparent leading-tight px-1">
//                   POPCORN COMBOS
//                 </strong>
//               </div>
//             </div>
//           </div>

//           {/* Second Square */}
//           <div className="relative flex-1 max-w-[150px]">
//             <Image
//               src="/png/placeholder-square.png"
//               alt="questions counter"
//               width={0}
//               height={0}
//               sizes="(max-width: 768px) 45vw, 150px"
//               className="w-full h-auto aspect-square object-cover"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="flex flex-col justify-center items-center h-full gap-1">
//                 <h2
//                   className="text-white text-center text-7xl font-medium leading-none"
//                   style={{
//                     textShadow: `
//                 0px 0px 3.81px rgba(255, 255, 255, 1),
//                 0px 0px 7.62px rgba(255, 255, 255, 1)
//               `,
//                   }}
//                 >
//                   6
//                 </h2>
//                 <strong className="text-white text-center textbase font-medium bg-transparent leading-tight px-1">
//                   QUESTIONS
//                 </strong>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section id="button" className="py-3">
//         <OverText
//           image={"/png/placeholder-rectangle.png"}
//           text={"Answer Quick"}
//         />
//         <OverText
//           image={"/png/placeholder-rectangle.png"}
//           text={"SNACK QUICKER!"}
//         />
//       </section>

//       <section className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//         <div className="relative inline-block">
//           <Image
//             src="/png/button.png"
//             alt="placeholder-square"
//             width={210}
//             height={80}
//             className="block"
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <h2
//               className="text-center text-3xl font-bold text-[#560C0C] leading-16"
//               style={{
//                 textShadow: `
//             0px 0px 3.81px rgba(255, 255, 255, 1),
//             0px 0px 7.62px rgba(255, 255, 255, 1)
//           `,
//               }}
//             >
//               START
//             </h2>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import Image from "next/image";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import OverText from "@/components/OverText";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style jsx>{`
        .header-animate {
          opacity: 0;
          transform: scale(0.5);
          animation: headerFadeScaleIn 0.6s ease-out forwards;
        }

        .square-animate {
          opacity: 0;
          transform: translateY(200px);
          animation: slideUpFadeIn 0.8s ease-out 0.8s forwards;
        }

        .rectangle-animate {
          opacity: 0;
          transform: translateY(100px);
          animation: slideUpFadeIn 0.8s ease-out 1.5s forwards;
        }

        .button-animate {
          opacity: 0;
          transform: translateY(50px);
          animation: slideUpFadeIn 0.6s ease-out 2.3s forwards;
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

        @keyframes slideUpFadeIn {
          0% {
            opacity: 0;
            transform: translateY(var(--start-y, 100px));
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="relative px-6 py-14 max-w-md text-center mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
        <div className={isLoaded ? "header-animate" : "opacity-0"}>
          <Header text={"PLAY N WIN COUPONS"} />
        </div>

        <section
          id="square"
          className={`py-5 ${isLoaded ? "square-animate" : "opacity-0"}`}
          style={{ "--start-y": "200px" }}
        >
          <div className="flex gap-5 justify-center">
            {/* First Square */}
            <div className="relative flex-1 max-w-[150px]">
              <Image
                src="/png/placeholder-square.png"
                alt="popcorn combos counter"
                width={0}
                height={0}
                sizes="(max-width: 768px) 45vw, 150px"
                className="w-full h-auto aspect-square object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col justify-center items-center h-full gap-1">
                  <h2
                    className="text-white text-center text-7xl font-medium leading-none"
                    style={{
                      textShadow: `
                    0px 0px 3.81px rgba(255, 255, 255, 1),
                    0px 0px 7.62px rgba(255, 255, 255, 1)
                  `,
                    }}
                  >
                    6
                  </h2>
                  <strong className="text-white text-center text-base font-medium bg-transparent leading-tight px-1">
                    POPCORN COMBOS
                  </strong>
                </div>
              </div>
            </div>

            {/* Second Square */}
            <div className="relative flex-1 max-w-[150px]">
              <Image
                src="/png/placeholder-square.png"
                alt="questions counter"
                width={0}
                height={0}
                sizes="(max-width: 768px) 45vw, 150px"
                className="w-full h-auto aspect-square object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col justify-center items-center h-full gap-1">
                  <h2
                    className="text-white text-center text-7xl font-medium leading-none"
                    style={{
                      textShadow: `
                    0px 0px 3.81px rgba(255, 255, 255, 1),
                    0px 0px 7.62px rgba(255, 255, 255, 1)
                  `,
                    }}
                  >
                    6
                  </h2>
                  <strong className="text-white text-center text-base font-medium bg-transparent leading-tight px-1">
                    QUESTIONS
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="button"
          className={`py-3 ${isLoaded ? "rectangle-animate" : "opacity-0"}`}
        >
          <OverText
            image={"/png/placeholder-rectangle.png"}
            text={"Answer Quick"}
          />
          <OverText
            image={"/png/placeholder-rectangle.png"}
            text={"SNACK QUICKER!"}
          />
        </section>

        <section
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${
            isLoaded ? "button-animate" : "opacity-0"
          }`}
        >
          <div className="relative inline-block">
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
                START
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}