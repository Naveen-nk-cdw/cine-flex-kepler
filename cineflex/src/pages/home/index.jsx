import React, { useEffect, useState } from 'react'
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
import smallAd from '../../assets/advertisements/small-promos/Advertisement-Small-1.png'
import { fetchTrailers } from '../../services/fetchService'
//HOC to wrap the shortTeaser component
const AdWrapperShortTeaser = AdWrapper(ShortTeaserVideo,5,2,'shortTeaser',smallAd);

const Home = () => {
  //state to store trailer data
  const [trailersData, setTrailerssData] = useState(null);
  //creates other language icons
  const otherLanguageIcons = CONSTANTS.OTHERLANGUAGE.LANGUAGE_REPRESENTATION.map((letterLabel)=>{
    return <LetterIcon key={uuidv4()} letterLabel={letterLabel}/>
  })
  //creates short teaser video
  const shortTrailers = trailersData?.map((trailerData)=>{
    return <AdWrapperShortTeaser
        key={uuidv4()}
        posterSrc={trailerData.videoSrc}
        heading={trailerData.title}
      />
  })
  //fetches trailer data
  const loadInitialData = async() =>{
    const data = await fetchTrailers();
    setTrailerssData(data);
  }
  //useeffect to trigger fetching data
  useEffect(()=>{
    loadInitialData();
  },[])
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
        <div className={styles.shortTeaserHeading}>
            {CONSTANTS.HOME.SHORT_TEASER}
        </div>
        <div className={styles.shortTeaserContainer}>
          {shortTrailers}
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