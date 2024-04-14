import Link from "next/link"
import { getDictionary } from "@/lib/langDictionaries"

export const Navbar = async ({ lang }) => {
  const dictionary = await getDictionary(lang)
  const navbarLinks = dictionary.navbar
  console.log(navbarLinks)

  return (
    <>
      {/* Navbar for Desktop */}
      <nav className="hidden md:flex justify-between w-full h-20 py-4 max-w-screen-2xl mx-auto">
        <Link href={`/${lang}`}>
          <div className="w-[150px] h-[50px] bg-gray-600 rounded" />
        </Link>
        <ul className="flex justify-start items-center space-x-10">
          {navbarLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Navbar for Mobile */}
    </>
  )
}
