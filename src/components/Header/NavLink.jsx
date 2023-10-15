"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import styles from "./Header.module.css"

const NavLink = ({ pageSection }) => {
  const pathname = usePathname()
  let currentClassName = styles.navLink

  if (pathname === pageSection.link) {
    currentClassName += " " + styles.active
  }

  return (
    <Link href={pageSection.link} className={currentClassName}>
      {pageSection.name}
    </Link>
  )
}

export default NavLink
