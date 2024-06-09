import { getDictionary } from "@/lib/langDictionaries"

async function JoinPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const about = dictionary?.join || { title: 'Error' }
  return (
    <div>
      <h1>{about.title}</h1>
    </div>
  )
}

export default JoinPage
