import Image from "next/image"
import Link from "next/link"
import styles from "./HeroSection.module.css"
import Satellite from "./Satellite"

const HeroSection = () => {
  return (
    <>
      <section>
        <div className={styles.hero}>
          <figure className={styles.background_stars}>
            <img
              src="https://static.wixstatic.com/media/28f530_3b766a8f10554bd7ae5343a33ff4712f~mv2.jpg/v1/fill/w_1288,h_858,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28f530_3b766a8f10554bd7ae5343a33ff4712f~mv2.jpg"
              alt="Stars"
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
      </section>
      <img
        src="https://static.wixstatic.com/media/28f530_cd58cec5c298416996c94e98d29f0c7f~mv2.png/v1/fill/w_1030,h_400,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/28f530_cd58cec5c298416996c94e98d29f0c7f~mv2.png"
        alt="Earth"
        className={styles.background_earth}
      />
    </>
  )
}

export default HeroSection
