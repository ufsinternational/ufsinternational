import Link from "next/link"
import styles from "./ActionSection.module.css"

const Action = (params) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={params.url} alt="" />
          <h3>{params.title}</h3>
          <br />
          <p>{params.description}</p>
        </div>
      </div>
    </>
  )
}

export default Action
