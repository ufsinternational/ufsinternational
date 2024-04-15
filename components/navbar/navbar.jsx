import LogoDesktop from "/public/images/logoDesktop.png"
import LogoMobile from "/public/images/logoMobile.png"
import Image from "next/image"
import Link from "next/link"

import { getDictionary } from "@/lib/langDictionaries"
import { NavbarLinkComponent } from "./navbar-links"
import { NavbarMobile } from "./navbar-mobile"

export const Navbar = async ({ lang }) => {
  const dictionary = await getDictionary(lang)
  const navbarLinks = dictionary.navbar

  return (
    <>
      {/* Navbar for Desktop */}
      <nav className="hidden md:flex justify-between items-center w-full h-20 p-4 px-8 max-w-screen-2xl mx-auto">
        <Logo />
        <ul className="flex justify-start items-center space-x-10 lg:space-x-24">
          {navbarLinks.map((link, index) => {
            if (link.onlyOnMobile) return null
            return <NavbarLinkComponent key={index} link={link} />
          })}
        </ul>
      </nav>
      {/* Navbar for Mobile */}
      <nav className="flex md:hidden justify-between items-center w-full p-5 px-8">
        <Logo />
        <NavbarMobile navbarLinks={navbarLinks} />
      </nav>
    </>
  )
}

const Logo = () => {
  return (
    <>
      {/* Logo Desktop */}
      <Link href="/" className="hidden md:block">
        <Image src={LogoDesktop} alt="Logo" width={150} height={75} />
      </Link>
      {/* Logo Mobile */}
      <Link href="/" className="block md:hidden">
        <Image src={LogoMobile} alt="Logo" width={70} height={37.5} />
      </Link>
    </>
  )
}
