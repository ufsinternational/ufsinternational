"use client"
import { pageSections } from "@/data/pageSections"
import { usePathname } from "next/navigation"
import { useState } from "react"
import MobileMenuButton from "./MobileMenuButton"

const HeaderLinks = ({ styles }) => {
  const pathName = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <>
      <MobileMenuButton
        styles={styles}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <nav
        className={`${styles.headerNav} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {pageSections.map((section) => (
          <a
            className={
              pathName === section.link ? styles.navLinkActive : styles.navLink
            }
            href={section.link}
            key={section.name}
          >
            {section.name}
          </a>
        ))}
      </nav>
    </>
  )
}

export default HeaderLinks
