import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import { ModeToggler } from "@/components/mode-toggler"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar/navbar"

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
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar lang={lang} />
          <main className="md:max-w-screen-lg lg:max-w-screen-xl mx-auto">
            {children}
          </main>
          <ModeToggler />
        </ThemeProvider>
      </body>
    </html>
  )
}
