'use client'
import { useContext } from 'react'

// COMPONENTS
import { Navbar } from '@/components/Navbar/Navbar'
import { Content } from '@/components/Content/Content'
import { Footer } from '@/components/Footer/Footer'

// CONTEXT
import ThemeContext, { ThemeContextProvider } from '@/context/ThemeContext'

// STYLES
import './GlobalStyle.scss'
import styles from './GlobalStyle.module.scss'

export default function Home() {
  const WrappedApp = () => {
    const { isDark } = useContext(ThemeContext)
    return (
      <div
        className={[
          styles.main,
          isDark ? styles.themeDark : styles.themeLight
        ].join(' ')}
      >
        <Content />
      </div>
    )
  }

  return (
    <>
      <ThemeContextProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <WrappedApp />
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeContextProvider>
    </>
  )
}
