"use client"
import "bootstrap-icons/font/bootstrap-icons.css"
import Image from "next/image"
import { useState } from "react"
import styles from "./ArticlesSection.module.css"

const Card = (params) => {
  const [isFilled, setIsFilled] = useState(false)
  const [count, setCount] = useState(Number(params.likes))

  const handleClick = () => {
    if (isFilled) {
      setIsFilled(false)
      setCount(count - 1)
    } else {
      setIsFilled(true)
      setCount(count + 1)
    }
  }

  return (
    <div className={styles.card}>
      <img src={params.main_image} />
      <div className={styles.author}>
        <img src={params.author_image} alt="Imagen del autor" />
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
          <i class="bi bi-chat-left"></i>
          <p>{params.comments}</p>
        </div>
        <div
          className={`${styles.data_icons} ${styles.heart}`}
          style={{ color: `${isFilled ? "red" : "white"}` }}
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
