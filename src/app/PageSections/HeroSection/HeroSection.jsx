import Satellite from "./Satellite"
import styles from "./HeroSection.module.css"
import Link from "next/link"

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.mainSubsection}>
        <h1 className={styles.title}>
          Bienvenido a la <br />
          <span> United Federation of Science</span>
        </h1>
        <p className={styles.text}>
          Somos una organización internacional no gubernamental (OING) dedicada
          a la promoción de conocimiento científico.
        </p>
        <div className={styles.buttons}>
          <Link href="#" className={styles.button}>
            Conócenos
          </Link>
          <Link href="#" className={styles.button + " " + styles.highlightBg}>
            Aporta a la ciencia
          </Link>
        </div>
      </div>
      <div className={styles.imageSubsection}>
        <Satellite styles={styles} />
        <div className={styles.quote}>
          <p className={styles.quoteText}>
            &quot;La ciencia no es más que una herramienta para comprender el
            pasado, estudiar el presente y construir el futuro.&quot;
          </p>
          <p className={styles.quoteAuthor}>- César Aspiros, fundador.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
