import { getDictionary } from "@/lib/langDictionaries"
import { MainSection } from "./(sections)/main"
import { WhatWeDoSection } from "./(sections)/what-we-do"
import { Separator } from "@/components/ui/separator"

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const homeContent = dictionary.home
  return (
    <>
      <MainSection content={homeContent.main} />
      <Separator className="w-full md:hidden" />
      <WhatWeDoSection content={homeContent.whatWeDo} />
    </>
  )
}
