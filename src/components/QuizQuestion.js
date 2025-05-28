import Image from "next/image"

const QuizQuestion = ({question,className,questionIndex}) => {
  return (
    <div className="relative w-full flex justify-center items-center">
    <h3 className="font-normal text-[22px] leading-6 z-50 absolute py-8 px-7 text-center mx-auto ">
       <span>Q{questionIndex+1}:</span> {question}
    </h3>

      <Image
        className="w-[85vw] h-auto"
        // className="h-[16vh] w-auto"
        src="/quiz/quiz-option.png" alt="quiz-option"
        width={327} height={115}
        priority={true}
        />
  </div>
)
}

export default QuizQuestion
