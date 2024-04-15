import WhatWeDoImage from "/public/images/whatwedo.png"
import Image from "next/image"

export const WhatWeDoSection = ({ content }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 relative w-full h-full p-4 z-10 items-center">
      <div className="z-10">
        <Image
          src={WhatWeDoImage}
          alt={content.title}
          width={500}
          height={450}
          className="w-[500px] h-[430px] md:w-[500px] md:h-[500px]"
        />
      </div>
      <div className="flex flex-col items-start justify-center z-10">
        <h1 className="text-2xl text-accent mb-4 font-bold">{content.title}</h1>
        <p className="text-base">{content.description}</p>
      </div>
      <div className="h-screen w-screen absolute top-0 left-1/2 -translate-x-1/2 bg-black z-0" />
    </section>
  )
}
