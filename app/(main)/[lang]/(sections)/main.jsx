import { GlobeDemo } from "@/components/globe-provider"
import { Button } from "@/components/ui/button-provider"

export const MainSection = ({ content }) => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 w-full md:pt-32 px-4 pb-4"
      style={{
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      {/* <div className="hidden md:block h-screen w-screen absolute top-0 left-0 bg-gradient-to-b from-transparent to-black from-90%" /> */}
      <div className="max-w-[500px] px-4 flex flex-col items-center md:justify-start md:items-start mb-24 md:mb-0"></div>
      <div className="max-w-[500px] px-4 flex flex-col items-center md:justify-start md:items-start mb-24 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4 md:mb-8 leading-[1.2] md:leading-[1.5]">
          {content.title}
          <span className="text-accent"> {content.subtitle}</span>
        </h1>
        <p className="text-lg mb-8 max-w-[500px]">{content.description}</p>
        <Button className="relative inline-flex h-12 w-full md:w-fit overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-900 px-6 xl-1 text-xl font-medium text-white backdrop-blur-3xl">
            {content.mainButton}
          </span>
        </Button>
      </div>
      <div className="w-full flex flex-col items-end justify-start">
        <GlobeDemo />

        <p className="text-sm italic text-gray-400 max-w-[400px] font-light">
          &quot;{content.quote}&quot;.{" "}
          <span className="text-accent font-bold">- {content.quoteAuthor}</span>
        </p>
      </div>
    </section>
  )
}
