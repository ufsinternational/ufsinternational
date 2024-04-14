import { getDictionary } from "@/lib/langDictionaries"

async function AboutPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const about = dictionary.about
  return (
    <div>
      <h1>{about.title}</h1>
    </div>
  )
}

export default AboutPage
