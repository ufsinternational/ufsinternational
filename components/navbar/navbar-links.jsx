"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export const NavbarLinkComponent = ({ link, className, ...props }) => {
  const pathname = usePathname()
  // Check if pathname (after removing the language prefix) is equal to the link URL (after removing the language prefix if it exists)
  const isActive =
    pathname.replace(/\/[a-z]{2}\//, "/") ===
      link.url.replace(/\/[a-z]{2}\//, "/") ||
    pathname.replace(/\/[a-z]{2}/, "/") === link.url

  return (
    <li
      className="h-8 flex flex-col items-center justify-center rounded-md group/navlink"
      {...props}
    >
      <Link
        href={link.url}
        className={cn(
          "relative text-2xl md:text-base lg:text-lg",
          isActive && "before:scale-x-0 before:bg-accent text-accent",
          className,
        )}
      >
        {link.text}
      </Link>
      {/* Gradients */}
      <div
        className={cn(
          "scale-x-0 max-w-[5rem] w-[5rem] h-2 relative group-hover/navlink:scale-x-100 transition-transform duration-300",
          isActive && "scale-x-100 group-hover/navlink:scale-x-0",
        )}
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 blur-sm" />
        <div className="absolute left-1/2 -translate-x-1/3 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </li>
  )
}
