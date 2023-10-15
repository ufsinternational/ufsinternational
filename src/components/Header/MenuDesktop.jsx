import { pageSections } from "@/data/pageSections"
import NavLink from "./NavLink"

const MenuDesktop = ({ styles }) => {
  return (
    <nav className={styles.navDesktop}>
      {pageSections.map((section) => (
        <NavLink key={section.name} pageSection={section} />
      ))}
    </nav>
  )
}

export default MenuDesktop
