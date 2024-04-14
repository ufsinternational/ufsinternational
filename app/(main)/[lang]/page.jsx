import { getDictionary } from "@/lib/langDictionaries"

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang)
  const navbarLinks = dictionary.navbar
  return (
    <>
      <h1>{navbarLinks[2].name}</h1>
    </>
  )
}
