import React from 'react'
import styles from './home.module.scss'
import homeBanner from '../../assets/sindel-background.png'
import { CONSTANTS } from '../../constants/constants'
import NumberLottery from '../../components/numberLottery'
import ErrorBoundary from '../../components/errorBoundary'
import Trailer from '../../components/trailer'
import ShortTeaserVideo from '../../components/shortTeaserVideo'
import AdWrapper from '../../components/adWrapper'
import { v4 as uuidv4 } from 'uuid';
import LetterIcon from '../../components/letterIcon'

const Home = () => {
  const otherLanguageIcons = CONSTANTS.OTHERLANGUAGE.LANGUAGE_REPRESENTATION.map((letterLabel)=>{
    return <LetterIcon key={uuidv4()} letterLabel={letterLabel}/>
  })
  console.log(otherLanguageIcons);
  return (
    <>
      <div className={styles.homeBanner}>
        <img src={homeBanner} alt={CONSTANTS.HOME.HOME_BANNER_ALT}/>
      </div>
      <ErrorBoundary>
        <NumberLottery/>
      </ErrorBoundary>
      <div className={styles.homeContainer}>
        <Trailer/>
        <div className={styles.shortTeaserContainer}>
          {AdWrapper(ShortTeaserVideo,10,5,"https://tympanus.net/Development/SeatPreview/media/sintel.mp4","The Mountain Climber")}
          {AdWrapper(ShortTeaserVideo,10,5,"https://tympanus.net/Development/SeatPreview/media/sintel.mp4","The Mountain Climber")}
          {AdWrapper(ShortTeaserVideo,10,5,"https://tympanus.net/Development/SeatPreview/media/sintel.mp4","The Mountain Climber")}
        </div>
        <div>
          <div className={styles.languageHeading}>
            {CONSTANTS.OTHERLANGUAGE.HEADING}
          </div>
          <div className={styles.otherLanguageContainer}>
            {otherLanguageIcons}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home