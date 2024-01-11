import React from 'react';
import styles from './header.module.scss'
import logo from '../../assets/logo.png'
import { CONSTANTS } from '../../constants/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src={logo} alt="cine-flex-logo"/>
      <div className={styles.links}>
        <Link className={styles.home} to={CONSTANTS.HEADER.HOME_ROUTE}>{CONSTANTS.HEADER.HOME}</Link>
        <Link className={styles.allMovies} to={CONSTANTS.HEADER.ALL_MOVIES_ROUTE}>{CONSTANTS.HEADER.ALL_MOVIES}</Link>
      </div>
      <div className={styles.profile}>
        <Link className={styles.logout}>{CONSTANTS.HEADER.LOGIN}</Link>
      </div> 
    </nav>
  )
}

export default Header