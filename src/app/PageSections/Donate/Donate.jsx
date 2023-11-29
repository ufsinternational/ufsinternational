import Link from "next/link"
import styles from "./Donate.module.css"
const Donate = () => {
  return (
    <>
      <div className={styles.container_donate}>
        <div className={styles.background_donate}>
          <div className={styles.titles}>
            <h2>
              Aporta a la <em>Ciencia</em>
            </h2>
            <br />
            <p>
              Ayúdanos a seguir creciendo, puedes volverte uno de nuestros
              miembros o donar, esto nos permitirá realizar más eventos,
              productos editoriales, cursos y artículos de divulgación
              científica.
            </p>
            <br />
            <div className={styles.buttons}>
              <Link href="#" className={styles.button}>
                Únete
              </Link>
              <Link
                href="#"
                className={styles.button + " " + styles.highlightBg}
              >
                Dona
              </Link>
            </div>
          </div>
          <img
            src="https://static.wixstatic.com/media/28f530_351ae68d6bd44444a457d9bf977d3ea6~mv2.png/v1/fill/w_839,h_474,al_c,lg_1,q_90,usm_0.66_1.00_0.01,enc_auto/tortuga%201%20(1).png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Donate
