import ActionAxis from "./PageSections/ActionAxis/ActionAxis"
import ActionSection from "./PageSections/ActionSection/ActionSection"
import ArticlesSection from "./PageSections/ArticlesSection/ArticlesSection"
import Donate from "./PageSections/Donate/Donate"
import Footer from "./PageSections/Footer/Footer"
import HeroSection from "./PageSections/HeroSection/HeroSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ArticlesSection />
      <ActionAxis />
      <ActionSection />
      <Donate />
      <Footer />
    </>
  )
}
