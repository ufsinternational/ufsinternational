import { getDictionary } from "@/lib/langDictionaries"

async function NewsPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const about = dictionary?.news || { title: 'Error' }
  return (
    <div>
      <h1>{about.title}</h1>
    </div>
  )
}

export default NewsPage
