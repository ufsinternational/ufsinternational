import Header from "@/components/Header/Header"
import "./globals.css"

export const metadata = {
  title: "UFS International page",
  description: "United Federation of Science International Web Site",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
