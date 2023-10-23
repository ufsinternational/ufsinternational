import Link from "next/link"
import styles from "./ArticlesSection.module.css"
import Card from "./Card"

const ArticleSection = () => {
  return (
    <div>
      <div className={styles.titles}>
        <h2>
          Últimos <em>artículos</em>
        </h2>
        <div className={styles.blog}>
          <h3>Ir a blog</h3>
          <svg
            data-bbox="4 4 16 16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            height="30"
            width="30"
            data-type="color"
          >
            <g>
              <mask
                height="24"
                width="24"
                y="0"
                x="0"
                maskUnits="userSpaceOnUse"
                id="e4a3bd7f-3227-4323-84cd-0411920f50e2"
                fill="none"
              >
                <path fill="#D9D9D9" d="M24 0v24H0V0h24z"></path>
              </mask>
              <g mask="url(#e4a3bd7f-3227-4323-84cd-0411920f50e2)">
                <path
                  fill="#AAEE3D"
                  d="m12 20-1.425-1.4 5.6-5.6H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8Z"
                  data-color="1"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.cards}>
        <Card
          name="UFS | Website Editor"
          date="6 dic 2022"
          main_image="https://static.wixstatic.com/media/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png/v1/fill/w_264,h_199,fp_0.50_0.50,q_95,enc_auto/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png"
          alt="Imagen del contenido"
          title="Una nueva investigación Arqueológica"
          description="Esta es una descripción de la tarjeta"
          author_image="https://static.wixstatic.com/media/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png"
          views="3"
          comments="10"
          likes="6"
        ></Card>
        <Card
          name="UFS | Website Editor"
          date="6 dic 2022"
          main_image="https://static.wixstatic.com/media/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png/v1/fill/w_264,h_199,fp_0.50_0.50,q_95,enc_auto/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png"
          alt="Imagen del contenido"
          title="Una nueva investigación Arqueológica"
          description="Esta es una descripción de la tarjeta"
          author_image="https://static.wixstatic.com/media/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png"
          views="3"
          comments="10"
          likes="6"
        ></Card>
        <Card
          name="UFS | Website Editor"
          date="6 dic 2022"
          main_image="https://static.wixstatic.com/media/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png/v1/fill/w_264,h_199,fp_0.50_0.50,q_95,enc_auto/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png"
          alt="Imagen del contenido"
          title="Una nueva investigación Arqueológica"
          description="Esta es una descripción de la tarjeta"
          author_image="https://static.wixstatic.com/media/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png"
          views="3"
          comments="10"
          likes="6"
        ></Card>
        <Card
          name="UFS | Website Editor"
          date="6 dic 2022"
          main_image="https://static.wixstatic.com/media/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png/v1/fill/w_264,h_199,fp_0.50_0.50,q_95,enc_auto/7b9ac7_25effea4e6db430d848a96cf0efe69d5~mv2.png"
          alt="Imagen del contenido"
          title="Una nueva investigación Arqueológica"
          description="Esta es una descripción de la tarjeta"
          author_image="https://static.wixstatic.com/media/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/28f530_017595be2395498f9695142f3bb0c367%7Emv2.png"
          views="3"
          comments="10"
          likes="6"
        ></Card>
      </div>
    </div>
  )
}

export default ArticleSection
