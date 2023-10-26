import ActionAxis from "./PageSections/ActionAxis/ActionAxis"
import ArticlesSection from "./PageSections/ArticlesSection/ArticlesSection"
import Footer from "./PageSections/Footer/Footer"
import HeroSection from "./PageSections/HeroSection/HeroSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArticlesSection />
      <ActionAxis />
      <Footer />
    </>
  )
}
