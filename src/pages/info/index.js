// import Image from "next/image";

// import Header from "@/components/Header";

// import OverInput from "@/components/OverInput";
// import { useState } from "react";

// export default function Info() {
//     const [inputValue, setInputValue] = useState("");
//   return (
//     <div className="relative px-6 py-14 max-w-md text-center  mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
//       <Header text={"PLAY N WIN COUPONS"} />

//       <section id="input" className="py-3">
//         <h3 className=" font-medium text-2xl">Please enter your details</h3>
//         <OverInput
//           image="/png/placeholder-rectangle-star.png"
//           placeholder="enter full name"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <OverInput
//           image="/png/placeholder-rectangle-star.png"
//           placeholder="enter mobile number"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <OverInput
//           image="/png/placeholder-rectangle-star.png"
//           placeholder="enter email ID"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//       </section>

//       <section id="button" className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
//               answer quick
//             </h2>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import Image from "next/image";
// import { useEffect, useState } from "react";

// import Header from "@/components/Header";
// import OverInput from "@/components/OverInput";

// export default function Info() {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//   });

//   // Check if all fields are filled
//   const isFormComplete =
//     formData.fullName.trim() !== "" &&
//     formData.mobileNumber.trim() !== "" &&
//     formData.email.trim() !== "";

//   useEffect(() => {
//     // Trigger animations after component mounts
//     setIsLoaded(true);
//   }, []);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   return (
//     <>
//       <style jsx>{`
//         .header-animate {
//           opacity: 0;
//           transform: scale(0.5);
//           animation: headerFadeScaleIn 0.6s ease-out forwards;
//         }

//         .input-animate {
//           opacity: 0;
//           transform: translateY(-100px);
//           animation: slideDownFadeIn 0.8s ease-out 0.8s forwards;
//         }

//         .button-animate {
//           opacity: 0;
//           transform: translateY(50px) translateX(-50%);
//           animation: buttonSlideUpFadeIn 0.6s ease-out forwards;
//         }

//         .button-hide {
//           opacity: 0;
//           transform: translateY(50px) translateX(-50%);
//           pointer-events: none;
//         }

//         @keyframes headerFadeScaleIn {
//           0% {
//             opacity: 0;
//             transform: scale(0.5);
//           }
//           100% {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes slideDownFadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(-100px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes buttonSlideUpFadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(50px) translateX(-50%);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0) translateX(-50%);
//           }
//         }
//       `}</style>

//       <div className="relative px-6 py-14 max-w-md text-center mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
//         <div className={isLoaded ? "header-animate" : "opacity-0"}>
//           <Header text={"PLAY N WIN COUPONS"} />
//         </div>

//         <section
//           id="input"
//           className={`py-3 ${isLoaded ? "input-animate" : "opacity-0"}`}
//         >
//           <h3 className="font-medium text-2xl">Please enter your details</h3>
//           <OverInput
//             image="/png/placeholder-rectangle-star.png"
//             placeholder="enter full name"
//             value={formData.fullName}
//             onChange={(e) => handleInputChange("fullName", e.target.value)}
//           />
//           <OverInput
//             image="/png/placeholder-rectangle-star.png"
//             placeholder="enter mobile number"
//             value={formData.mobileNumber}
//             onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
//           />
//           <OverInput
//             image="/png/placeholder-rectangle-star.png"
//             placeholder="enter email ID"
//             value={formData.email}
//             onChange={(e) => handleInputChange("email", e.target.value)}
//           />
//         </section>

//         <section
//           id="button"
//           className={`absolute bottom-10 left-1/2 transition-all duration-600 ${
//             isFormComplete ? "button-animate" : "button-hide"
//           }`}
//         >
//           <div className="relative inline-block">
//             <Image
//               src="/png/button.png"
//               alt="placeholder-square"
//               width={210}
//               height={80}
//               className="block"
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <h2
//                 className="text-center text-3xl font-bold text-[#560C0C] leading-16"
//                 style={{
//                   textShadow: `
//                 0px 0px 3.81px rgba(255, 255, 255, 1),
//                 0px 0px 7.62px rgba(255, 255, 255, 1)
//               `,
//                 }}
//               >
//                 answer quick
//               </h2>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import OverInput from "@/components/OverInput";
import Link from "next/link";

export default function Info() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
  });

  // Check if all fields are filled
  const isFormComplete =
    formData.name.trim() !== "" &&
    formData.number.trim() !== "" &&
    formData.email.trim() !== "";

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (!isFormComplete) return;
    sessionStorage.setItem("formData", JSON.stringify(formData));
  }, [formData.name, formData.email, formData.number]);
  return (
    <>
      <style jsx>{`
        .header-animate {
          opacity: 0;
          transform: scale(0.5);
          animation: headerFadeScaleIn 0.6s ease-out forwards;
        }

        .input-animate {
          opacity: 0;
          transform: translateY(-100px);
          animation: slideDownFadeIn 0.8s ease-out 0.8s forwards;
        }

        .button-animate {
          opacity: 0;
          transform: translateY(50px) translateX(-50%);
          animation: buttonSlideUpFadeIn 0.6s ease-out forwards;
        }

        .button-hide {
          opacity: 0;
          transform: translateY(50px) translateX(-50%);
          pointer-events: none;
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

        @keyframes slideDownFadeIn {
          0% {
            opacity: 0;
            transform: translateY(-100px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonSlideUpFadeIn {
          0% {
            opacity: 0;
            transform: translateY(50px) translateX(-50%);
          }
          100% {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
      `}</style>

      <div className="relative px-6 py-14 overflow-hidden max-w-md text-center mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
        <div className={isLoaded ? "header-animate" : "opacity-0"}>
          <Header text={"PLAY N WIN COUPONS"} />
        </div>

        <section
          id="input"
          className={`py-3 ${isLoaded ? "input-animate" : "opacity-0"}`}
        >
          <h3 className="font-medium text-2xl text-white">
            Please enter your details
          </h3>
          <OverInput
            image="/png/placeholder-rectangle-star.png"
            placeholder="enter full name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
          <OverInput
            image="/png/placeholder-rectangle-star.png"
            placeholder="enter mobile number"
            value={formData.number}
            onChange={(e) => handleInputChange("number", e.target.value)}
          />
          <OverInput
            image="/png/placeholder-rectangle-star.png"
            placeholder="enter email ID"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </section>

        <section
          id="button"
          className={`absolute bottom-10 left-1/2 transition-all duration-600 ${
            isFormComplete ? "button-animate" : "button-hide"
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

            <Link href={"/quiz"}>
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
                  answer quick
                </h2>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
