import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import { ModeToggler } from "@/components/mode-toggler"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "United Federation of Science",
  description:
    "The United Federation of Science is a global organization that promotes the advancement of science and technology.",
}

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={cn(poppins.className, "min-h-screen w-full")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar lang={lang} />
          <main className="mt-[20px]">{children}</main>
          <ModeToggler />
        </ThemeProvider>
      </body>
    </html>
  )
}
