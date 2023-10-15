import styles from "./Header.module.css"
import Image from "next/image"
import HeaderLinks from "./HeaderLinks"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <a className={styles.headerLogo} href="/">
          <Image
            src="/logo.png"
            alt="UFS Logo"
            width={248}
            height={78}
            className={styles.headerLogo}
            priority
          />
        </a>
        <HeaderLinks styles={styles} />
      </div>
    </header>
  )
}

export default Header
