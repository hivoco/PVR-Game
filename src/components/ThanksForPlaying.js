import React from 'react'
import Button from './Button'
import Header from './Header'

const ThanksForPlaying = () => {
  return (
    <div className="relative px-6 flex justify-center items-center py-[6vh] max-w-md text-center mx-auto h-svh bg-[url('/png/BG.png')] bg-cover bg-center bg-no-repeat">
    <div className="absolute top-1/2 -translate-y-1/2  ">
      <Header text={"THANKS FOR PLAYING!"} />

      <div className="py-[3vh]">
        <h4 className="uppercase font-medium text-2xl text-center">
          Not this time, but{" "}
        </h4>
        <h4 className="uppercase font-medium text-2xl text-center">
          more surprises await!
        </h4>
      </div>
    </div>

    <div className="absolute bottom-[6vh] left-1/2 -translate-x-1/2 ">
      <Button title="Explore More" />
    </div>
  </div>
)
}

export default ThanksForPlaying
