"use client"

import { useState } from "react"
import { IoMdMenu } from "react-icons/io"

import { Button } from "@/components/ui/button-provider"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { NavbarLinkComponent } from "./navbar-links"

export const NavbarMobile = ({ navbarLinks }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="flex items-center" variant="icon">
          <IoMdMenu className="text-3xl" />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <ul className="flex flex-col items-start space-y-8 pt-16">
          {navbarLinks.map((link, index) => {
            return (
              <NavbarLinkComponent
                link={link}
                key={index}
                onClick={handleClick}
              />
            )
          })}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
