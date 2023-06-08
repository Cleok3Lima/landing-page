import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// STYLES
import styles from './Content.module.scss'

export const Content = () => {
  const list = [0, 1]
  const Boxes = () => {
    return (
      <div className={styles.sectionTwoBox}>
        <div className={styles.boxTitle}></div>
        <div className={styles.boxSubtitle}></div>
        <button className={styles.headerButton}>Button</button>
        <div className={styles.boxImg}></div>
        <div className={styles.boxTextContainer}>
          <div className={styles.boxText}></div>
          <div className={styles.boxText}></div>
          <div className={styles.boxText}></div>
          <div className={styles.boxText}></div>
          <div className={styles.boxText}></div>
          <div className={styles.boxText}></div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.contentContainer}>
      <div className={styles.header}>
        <div className={styles.headerImg}></div>
        <div className={styles.headerText}>
          <div className={styles.headerTitle}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.headerParagraph}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button className={styles.headerButton}>Button</button>
        </div>
      </div>

      <div className={styles.sectionOneContainer}>
        <div className={styles.sectionOnePartOne}>
          <div className={styles.sectionOneImg}></div>
          <div className={styles.sectionOneText}>
            <div className={styles.sectionOneTitle}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.sectionOneParagraph}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div className={styles.sectionOnePartTwo}>
          <div className={styles.sectionOneText}>
            <div className={styles.sectionOneTitle}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.sectionOneParagraph}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.sectionOnePartTwoImgContainer}>
            <div className={styles.sectionOnePartTwoImgPartOne}>
              <div className={styles.sectionOnePartTwoImgOne}></div>
              <div className={styles.sectionOnePartTwoImgOne}></div>
            </div>
            <div className={styles.sectionOnePartTwoImgTwo}></div>
          </div>
          <button className={styles.headerButton}>Button</button>
        </div>

        <div className={styles.sectionOnePartThree}>
          <div className={styles.sectionOnePartThreeImg}></div>
          <div className={styles.sectionOnePartThreeImg}></div>
          <div className={styles.sectionOnePartThreeImg}></div>
          <div className={styles.sectionOneText}>
            <div className={styles.sectionOneTitle}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.sectionOneParagraph}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={styles.sectionOnePartThreeCircles}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionTwoContainer}>
        <div className={styles.sectionTwoTitleContainer}>
          <div className={styles.sectionTwoTitle}></div>
          <div className={styles.sectionTwoSubtitle}></div>
        </div>
        <div className={styles.sectionTwoBoxesContainer}>
          <Carousel
            autoPlay={true}
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={6000}
            showStatus={false}
            showIndicators={false}
          >
            {list.map((id) => (
              <Boxes key={id} />
            ))}
          </Carousel>
        </div>
      </div>

      <div className={styles.sectionThreeContainer}>
        <div className={styles.sectionThreeTitleContainer}>
          <div className={styles.sectionThreeTitle}></div>
          <div className={styles.sectionThreeSubtitle}></div>
        </div>

        <div className={styles.sectionThreeListContainer}>
          <div className={styles.sectionThreeListItem}>
            <div className={styles.sectionThreeListItemTitle}></div>
            <div className={styles.sectionThreeListItemImg}></div>
          </div>
          <div className={styles.sectionThreeListItem}>
            <div className={styles.sectionThreeListItemTitle}></div>
            <div className={styles.sectionThreeListItemImg}></div>
          </div>
          <div className={styles.sectionThreeListItem}>
            <div className={styles.sectionThreeListItemTitle}></div>
            <div className={styles.sectionThreeListItemImg}></div>
          </div>
          <div className={styles.sectionThreeListItem}>
            <div className={styles.sectionThreeListItemTitle}></div>
            <div className={styles.sectionThreeListItemImg}></div>
          </div>
          <div className={styles.sectionThreeListItem}>
            <div className={styles.sectionThreeListItemTitle}></div>
            <div className={styles.sectionThreeListItemImg}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
