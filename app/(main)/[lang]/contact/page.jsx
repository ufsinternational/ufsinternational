import { getDictionary } from "@/lib/langDictionaries"

async function ContactPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const about = dictionary?.contact || { title: 'Error' }
  return (
    <div>
      <h1>{about.title}</h1>
    </div>
  )
}

export default ContactPage
