'use client'
// HOOKS
import { useContext, useState } from 'react'

// COMPONENTS
import { ToggleTheme } from '@/components/ToggleTheme/ToggleTheme'
import MenuIcon from '@/assets/icons/burguer-menu.svg'
import CloseIcon from '@/assets/icons/close-icon.svg'

// CONTEXT
import ThemeContext from '@/context/ThemeContext'

// STYLES
import styles from './Navbar.module.scss'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  const clickHandler = () => setOpen(!open)
  const { isDark } = useContext(ThemeContext)

  const BurguerMenu = () => {
    return (
      <>
        {open ? (
          <CloseIcon
            height={35}
            width={35}
            alt="Close menu"
            onClick={clickHandler}
            className={[
              styles.closeButton,
              isDark ? styles.closeButton__dark : styles.closeButton__light
            ].join(' ')}
          />
        ) : (
          <MenuIcon
            height={35}
            width={35}
            alt="Menu"
            onClick={clickHandler}
            className={[
              styles.menuIcon,
              isDark ? styles.menuIcon__dark : styles.menuIcon__light
            ].join(' ')}
          />
        )}
      </>
    )
  }

  const MenuList = () => {
    return (
      <ul
        className={[
          styles.menuList,
          isDark ? styles.menuList__dark : styles.menuList__light,
          open ? styles.menuList__open : styles.menuList__closed
        ].join(' ')}
      >
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="/"></a>
        </li>
      </ul>
    )
  }

  return (
    <>
      <nav
        className={`${styles.navbarContainer} ${
          isDark
            ? `${styles.navbarContainer__dark}`
            : `${styles.navbarContainer__light}`
        }`}
      >
        <ToggleTheme />
        <div className={styles.logo}>
          <span>LOGO</span>
        </div>
        <BurguerMenu />
        <MenuList />
      </nav>
    </>
  )
}
