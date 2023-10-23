import Image from "next/image"
import MenuMobile from "./MenuMobile"
import MenuDesktop from "./MenuDesktop"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="UFS Logo"
            width={248}
            height={78}
            className={styles.logo}
            priority
          />
        </a>
        <MenuMobile />
        <MenuDesktop styles={styles} />
      </div>
    </header>
  )
}

export default Header
