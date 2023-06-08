import React from 'react'

// STYLES
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerPartOneContainer}>
        <div className={styles.footerPartOneImg}></div>
        <div className={styles.footerPartOneTextOne}></div>
        <div className={styles.footerPartOneTextTwo}></div>
      </div>
      <div className={styles.footerPartTwoContainer}>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
        <div className={styles.footerPartTwoGrid}></div>
      </div>
    </div>
  )
}
