"use client"
import "bootstrap-icons/font/bootstrap-icons.css"
import Image from "next/image"
import { useState } from "react"
import styles from "./ArticlesSection.module.css"

const Card = (params) => {
  const [isFilled, setIsFilled] = useState(false)
  const [count, setCount] = useState(Number(params.likes))

  const handleClick = () => {
    setIsFilled(!isFilled)
    if (isFilled) {
      setCount(count - 1)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <div className={styles.card}>
      <Image src={params.main_image} alt="Logo Img" width={500} height={500} />
      <div className={styles.author}>
        <Image
          src={params.author_image}
          alt="Imagen del autor"
          width={500}
          height={500}
        />
        <div className={styles.author_details}>
          <h4 className={styles.author_name}>{params.name}</h4>
          <h4>{params.date}</h4>
        </div>
      </div>
      <div className={styles.card_title}>
        <h3>{params.title}</h3>
      </div>
      <div className={styles.card_description}>
        <p>Esta es una descripción de la tarjeta</p>
      </div>

      <hr />
      <div className={styles.card_details}>
        <div className={styles.data_icons}>
          <i className="bi bi-eye"></i>
          <p>{params.views}</p>
        </div>
        <div className={styles.data_icons}>
          <i className="bi bi-chat-left"></i>
          <p>{params.comments}</p>
        </div>
        <div
          className={`${styles.data_icons} ${styles.heart} ${
            isFilled ? styles.heart_filled : styles.heart_empty
          }`}
          onClick={handleClick}
        >
          <i id="heart" className={`bi bi-heart${isFilled ? "-fill" : ""}`}></i>
          <p>{count}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
