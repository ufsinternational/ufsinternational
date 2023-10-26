import "bootstrap-icons/font/bootstrap-icons.css"
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer_grid}>
          <div className={styles.foot_contact}>
            <h4>Contácto</h4>
            <div className={styles.address}>
              <h5>Dirección</h5>
              <p>
                Calle Hidalgo 52-C Col. Centro, Santa Cruz Xoxocotlán. CP 71230.
                Oaxaca, México
              </p>
            </div>

            <div className={styles.mails}>
              <h5>Contácto general:</h5>
              <p>contact@ufsinternational.org</p>
              <h5>Gestión de miembros</h5>
              <p>members@ufsinternational.org</p>
              <h5>Vinculación internacional</h5>
              <p>relations@ufsinternational.org</p>
            </div>
          </div>
          <div className={styles.foot_content}>
            <h4>Contenidos</h4>
            <h5>Aporta a la ciencia</h5>
            <h5>Vuélvete miembro</h5>
            <h5>Blog</h5>
            <h5>Contáctanos</h5>
            <h5>Políticas de privacidad</h5>
          </div>
          <div className={styles.foot_followus}>
            <div className={styles.main_social}>
              <h4>Síguenos</h4>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-tiktok"></i>
              <i class="bi bi-twitter-x"></i>
              <i class="bi bi-linkedin"></i>
              <i class="bi bi-youtube"></i>
            </div>
            <div className={styles.mx_media}>
              <h5>México</h5>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-tiktok"></i>
              <i class="bi bi-spotify"></i>
            </div>
            <div className={styles.cr_media}>
              <h5>Costa Rica</h5>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-tiktok"></i>
              <i class="bi bi-spotify"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
