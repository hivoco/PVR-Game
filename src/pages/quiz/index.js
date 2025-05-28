import Image from "next/image";
import { useEffect, useState } from "react";

import Header from "@/components/Header";
import OverInput from "@/components/OverInput";
import QuizQuestion from "@/components/QuizQuestion";
import QuizOverlay from "@/components/QuizOverlay";
import Button from "@/components/Button";
import { Router, useRouter } from "next/router";

export default function Quiz() {
  const ansImagesArray = [
    { src: "/quiz-options/q1.png", width: 74, height: 74 },
    { src: "/quiz-options/q2.png", width: 96, height: 90 },
    { src: "/quiz-options/q3.png", width: 100, height: 84 },
    { src: "/quiz-options/q4.png", width: 134, height: 60 },
    { src: "/quiz-options/q5.png", width: 124, height: 48 },
    { src: "/quiz-options/q6.png", width: 70, height: 75 },
  ];
  const router = useRouter();
  // const data = [
  //   {
  //     question: "Which actress is paired opposite Ajay Devgn in Raid 2?",
  //     options: [
  //       "Kiara Advani",
  //       "Vaani Kapoor",
  //       "Kriti Sanon",
  //       "Shraddha Kapoor",
  //     ],
  //     answer: "Kriti Sanon",
  //   },
  //   {
  //     question:
  //       "The madness continues... but one face doesn’t fit the frame! Which actor is not in Housefull 5?",
  //     options: [
  //       "Akshay Kumar",
  //       "Riteish Deshmukh",
  //       "Bobby Deol",
  //       "Ranveer Singh",
  //     ],
  //     answer: "Ranveer Singh",
  //   },
  //   {
  //     question: "Who’s the new face of the Coke Halftime campaign?",
  //     options: ["Ranveer Singh", "Yash", "Allu Arjun", "Vijay Deverakonda"],
  //     answer: "Allu Arjun",
  //   },
  //   {
  //     question:
  //       "Guess how many shades the Lakmēelift MultiSlayer Foundation Stick comes in?",
  //     options: ["11", "5", "9", "23"],
  //     answer: "11",
  //   },
  //   {
  //     question: "What’s the tagline of Closeup?",
  //     options: [
  //       "Smile karo, shine karo",
  //       "Paas Aao Na",
  //       "Zubaan Pe Rakhe Smile",
  //       "Dil Se Fresh",
  //     ],
  //     answer: "Paas Aao Na",
  //   },
  //   {
  //     question:
  //       "Which power-packed combo makes the new Garnier Cooling Watergel Sunscreen the ultimate summer essential?",
  //     options: [
  //       "SPF 15 + Aloe Vera",
  //       "SPF 30 + Coconut Oil",
  //       "SPF 50 + Vitamin C",
  //       "SPF 20 + Rose Water",
  //     ],
  //     answer: "SPF 50 + Vitamin C",
  //   },
  // ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionData, setQuestionData] = useState([]);
  const [response, setResponse] = useState("");
  const [hasUserWonCoupon, setHasUserWonCoupon] = useState();
  // console.log(questionData,'questionData');

  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState("");

  // const [formData, setFormData] = useState({
  //   fullName: "",
  //   mobileNumber: "",
  //   email: "",
  // });

  const [isOptionCorrect, setIsOptionCorrect] = useState(false);

  const [selectedOption, setSelectedOption] = useState({
    user_answer: "",
    question_id: "",
  });

  const [ansResponseArray, setAnsResponseArray] = useState([]);
  const [displayOverlay, setDisplayOverlay] = useState(false);

  // // Check if all fields are filled
  const isFormComplete =
    formData?.fullName?.trim() !== "" &&
    formData?.mobileNumber?.trim() !== "" &&
    formData?.email?.trim() !== "";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // const handleInputChange = (field, value) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  const nextQuestion = () => {
    setAnsResponseArray((prev) => [
      ...prev,
      {
        isCorrect: response?.is_correct,
        time: 0,
      },
    ]);
    // setIsLoaded(false);
    setQuestionIndex((prev) =>
      prev < questionData.length - 1 ? prev + 1 : prev
    );
  };

  function displayABCD(index) {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";

      default:
        return "";
    }
  }

  const getData = async () => {
    try {
      const URL =
        "https://api.pvr.thefirstimpression.ai/api/get_all_question?lang=english";
      const res = await fetch(URL);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setQuestionData(data.quiz);
    } catch (error) {
      console.log(error);
    }
  };

  async function postData(data) {
    const URL = "https://api.pvr.thefirstimpression.ai/api/verify";

    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setResponse(json);
    setDisplayOverlay(true);

    // console.log(json);
  }

  async function insertRecord(data) {
    const URL = "https://api.pvr.thefirstimpression.ai/api/insert_record";
    if (!isFormComplete) return;

    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        quiz: ansResponseArray,
      }),
    });
    const json = await res.json();
    // setHasUserWonCoupon(json.is_coupen);
    sessionStorage.setItem("hasUserWonCoupon", json.is_coupen);
    // if (questionIndex === 5) {
    router.push("/result");
    // }
    // console.log(json);
  }

  const verifyAnswer = ({ user_answer, question_id }) => {
    if (!user_answer) return;
    postData({
      lang: "english",
      user_answer: user_answer,
      question_id: question_id,
    });
  };

  // useEffect(() => {
  //   if (response.is_correct) {
  //     setAnsResponseArray((prev) => [
  //       ...prev,
  //       {
  //         isCorrect: response?.is_correct,
  //         time: 0,
  //       },
  //     ]);
  //   }
  // }, [response.is_correct]);

  console.log(ansResponseArray, "ansResponseArray");

  useEffect(() => {
    if (!displayOverlay) return;

    const timer = setTimeout(() => {
      setDisplayOverlay(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      if (!response.user_answer) return;
      setTimeout(() => {
        response.user_answer ? nextQuestion() : null;
        setResponse("");
      }, 1500);
    };
  }, [displayOverlay]);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("formData"));
    setFormData(data);
    // console.log(formData, "formData");
    getData();
  }, []);

  useEffect(() => {
    if (ansResponseArray.length === 6) {
      insertRecord();
    }
  }, [ansResponseArray.length]);

  // useEffect(() => {
  //   if (!response.user_answer) return;
  //   response.user_answer ? nextQuestion() : null;
  //   setResponse("");
  // }, [response.user_answer]);

  // if(!questionData.length) return <div>loading ....</div>
  const currentQuestion = questionData[questionIndex];
  // console.log(currentQuestion, "currentQuestion");

  // if (true) {
  //  return <QuizOverlay isOptionCorrect={true} />;
  // }
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
      <div className="relative px-6 py-[6vh] max-w-md text-center mx-auto h-svh overflow-hidden bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
        <div
          className={`transition-all duration-1000 ease-in-out 
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <Header text={"IT'S SHOWTIME"} className={`!h-[15vh]`} />
        </div>

        <section
          className={`
          transition-all duration-700 ease-in-out
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          {/* pt-[2.85vh] pb-[1.9vh] */}
          <h3 className="font-lucidity font-medium text-xl leading-6 pt-[2vh] pb-[1vh] text-white uppercase">
            Please select ONE CORRECT OPTION
          </h3>

          <QuizQuestion
            questionIndex={questionIndex}
            className={""}
            question={currentQuestion?.question}
          />

          <div
            className={`pt-[clamp(16px,2.95vh,24px)] font-lucidity flex flex-wrap justify-center items-center w-full gap-2 gap-x-3
              ${
                response.user_answer
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }
              `}
          >
            {/* ${
              selectedOption ? "gap-0" : "gap-2"
            } */}
            {currentQuestion?.options?.map((option, index) => (
              <div
                style={{
                  background:
                    option.toLowerCase() ===
                      response?.correct_option_value?.toLowerCase() &&
                    response.is_correct
                      ? "linear-gradient(135deg, #0C8416 0%, #40D222 65.19%, #34A813 100%)"
                      : "linear-gradient(135deg, #840C14 0%, #D2222C 65.19%, #A8131B 100%)",
                }}
                onClick={() => {
                  // setSelectedOption({
                  //   user_answer: option,
                  //   question_id: currentQuestion.question_id,
                  // })
                  verifyAnswer({
                    user_answer: option,
                    question_id: currentQuestion.question_id,
                  });
                }}
                // h-[15.77vh] w-[15.77vh] max-h-32 max-w-32
                key={index}
                className={`relative select-none overflow-hidden h-[15.77vh] w-[15.77vh] max-h-32 max-w-32 min-w-[110px] rounded-[20px]  
                  ${
                    response.user_answer === option
                      ? "outline-2 outline-white shadow-[0px_0px_25px_#FFFFFF]"
                      : ""
                  }
                  `}
              >
                <h3 className="absolute z-40 text-8xl leading-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10">
                  {displayABCD(index)}
                </h3>

                <h3
                  className={`absolute z-50 text-lg leading-5 left-1/2 -translate-x-1/2 
                    ${
                      option.toLowerCase() ===
                        response?.correct_option_value?.toLowerCase() &&
                      response.is_correct
                        ? "top-0"
                        : "top-1/2 -translate-y-1/2"
                    }
                    `}
                >
                  {option}
                </h3>

                {/* <Image
                  className={`${
                    selectedOption === option ? "h-[17.25vh] " : "h-[15.75vh]"
                  } w-auto`}
                  src={
                    selectedOption === option
                      ? "/quiz/correct-option.png"
                      : "/quiz/red-box.png"
                  }
                  alt="quiz-option"
                  width={136}
                  height={130}
                  priority={true}
                /> */}

                {option.toLowerCase() ===
                  response?.correct_option_value?.toLowerCase() &&
                  response.is_correct && (
                    <Image
                      className={`absolute z-50 bottom-0 sm:bottom-4 left-1/2 -translate-x-1/2 
                      ${
                        questionIndex === 3
                          ? "w-full h-auto rounded-t-[20px]"
                          : ""
                      }`}
                      src={ansImagesArray[questionIndex].src}
                      alt="quiz-option"
                      width={ansImagesArray[questionIndex].width}
                      height={ansImagesArray[questionIndex].height}
                      priority={true}
                    />
                  )}
              </div>
            ))}
          </div>
        </section>

        {/* <div
          onClick={() => {
            response.user_answer ? nextQuestion() : null;
            setResponse("");
          }}
          className={`absolute bottom-[3vh] left-1/2 -translate-x-1/2 cursor-default select-none
            transition-all duration-1000 ease-in-out
            ${isLoaded ? "translate-y-0" : "translate-y-[200%]"}
            `}
        >
          <Button title={questionIndex === 5 ? "Finish" : "Next"} />
        </div> */}
        {/* {console.log(response, "res")} */}
      </div>

      {displayOverlay && (
        <div className="absolute inset-0 z-50">
          <QuizOverlay isOptionCorrect={response.is_correct} />
        </div>
      )}

      {console.log(displayOverlay, "displayOverlay")}
    </>
  );
}
