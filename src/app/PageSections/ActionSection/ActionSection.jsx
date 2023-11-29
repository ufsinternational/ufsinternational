import Link from "next/link"
import Action from "./Action"
import styles from "./ActionSection.module.css"

const ActionSection = () => {
  return (
    <div className={styles.action_section}>
      <div className={styles.titles}>
        <h2>
          Ejes de <em>acción</em>
        </h2>
      </div>
      <div className={styles.action_container}>
        <Action
          url="https://static.wixstatic.com/media/28f530_52e80855bb5a4f20867a10a57e98a819~mv2.png/v1/fill/w_85,h_85,al_c,lg_1,q_85,usm_0.66_1.00_0.01,enc_auto/IconoDivulgaci%C3%B3nC.png"
          title="Divulgación científica"
          description="Hacer contenido multimedia con el objetivo de llevar el conocimiento científico a todas las plataformas digitales."
        />
        <Action
          url="https://static.wixstatic.com/media/28f530_4ace55d19b0c4e5dbb7c833cbff40ace~mv2.png/v1/fill/w_85,h_85,al_c,lg_1,q_85,usm_0.66_1.00_0.01,enc_auto/IconoEditorial.png"
          title="Editorial"
          description="Desarrollamos iniciativas para el fomento de la lectura de textos científicos de carácter no académico."
        />
        <Action
          url="https://static.wixstatic.com/media/28f530_558f6b8c83eb4d1e98db4bde441e64f3~mv2.png/v1/fill/w_85,h_85,al_c,lg_1,q_85,usm_0.66_1.00_0.01,enc_auto/IconoEducaci%C3%B3n.png"
          title="Educación científica"
          description="Realizamos proyectos educativos destinados a estudiantes de nivel preparatoria, universidad y posgrado."
        />
        <Action
          url="https://static.wixstatic.com/media/28f530_30447bf7de6f4ff58883ac33fa8a8351~mv2.png/v1/fill/w_85,h_85,al_c,lg_1,q_85,usm_0.66_1.00_0.01,enc_auto/IconoEventos.png"
          title="Eventos científicos"
          description="Organizamos todos esos eventos que la comunidad científica adora."
        />
      </div>
    </div>
  )
}

export default ActionSection
