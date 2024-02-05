import React from 'react'
import styles from './home.module.scss'
import homeBanner from '../../assets/sindel-background.png'
import { CONSTANTS } from '../../constants/constants'
import NumberLottery from '../../components/numberLottery'
import ErrorBoundary from '../../components/errorBoundary'
import Trailer from '../../components/trailer'

const Home = () => {
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
      </div>
    </>
  )
}

export default Home