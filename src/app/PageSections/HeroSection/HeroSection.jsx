import Image from "next/image"
import Link from "next/link"
import styles from "./HeroSection.module.css"
import Satellite from "./Satellite"

const HeroSection = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.hero}>
          <figure className={styles.backgroundStars}>
            <Image
              className={styles.backgroundStarsImg}
              src="/images/stars-bg.jpg"
              alt="Stars"
              width={500}
              height={500}
              unoptimized
            />
          </figure>

          <div className={styles.mainSubsection}>
            <h1 className={styles.title}>
              Bienvenido a la <br />
              <span> United Federation of Science</span>
            </h1>
            <p className={styles.text}>
              Somos una organización internacional no gubernamental (OING)
              dedicada a la promoción de conocimiento científico.
            </p>
            <div className={styles.buttons}>
              <Link href="#" className={styles.button}>
                Conócenos
              </Link>
              <Link
                href="#"
                className={styles.button + " " + styles.highlightBg}
              >
                Aporta a la ciencia
              </Link>
            </div>
          </div>
          <div className={styles.imageSubsection}>
            <Satellite styles={styles} />
            <div className={styles.quote}>
              <p className={styles.quoteText}>
                &quot;La ciencia no es más que una herramienta para comprender
                el pasado, estudiar el presente y construir el futuro.&quot;
              </p>
              <p className={styles.quoteAuthor}>- César Aspiros, fundador.</p>
            </div>
          </div>
        </div>
        <div className={styles.backgroundEarthWrapper}>
          <Image
            src="/images/earth-bg.png"
            alt="Earth"
            width={500}
            height={500}
            className={styles.backgroundEarth}
            unoptimized
          />
        </div>
      </section>
    </>
  )
}

export default HeroSection
