"use client"

const MobileMenuButton = ({
  styles,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <div
      className={
        isMobileMenuOpen ? styles.mobileMenuIconActive : styles.mobileMenuIcon
      }
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      <div className={styles.mobileMenuIconBar}></div>
      <div className={styles.mobileMenuIconBar}></div>
      <div className={styles.mobileMenuIconBar}></div>
    </div>
  )
}

export default MobileMenuButton
