'use client'
// HOOKS
import { useContext } from 'react'

// COMPONENTS
import SunIcon from '@/assets/icons/SunIcon.svg'
import MoonIcon from '@/assets/icons/MoonIcon.svg'

// CONTEXT
import ThemeContext from '@/context/ThemeContext'

// STYLES
import styles from './ToggleTheme.module.scss'

export const ToggleTheme = () => {
  const { isDark, toggleDark } = useContext(ThemeContext)

  return (
    <div>
      {isDark ? (
        <SunIcon
          viewBox="0 0 500 500"
          height={30}
          width={30}
          alt="menu"
          onClick={toggleDark}
          className={styles.icons}
        />
      ) : (
        <MoonIcon
          viewBox="0 -30 500 550"
          height={30}
          width={30}
          alt="menu"
          onClick={toggleDark}
          className={styles.icons}
        />
      )}
    </div>
  )
}
