import React, { useContext } from 'react';
import styles from './header.module.scss'
import logo from '../../assets/logo.png'
import { CONSTANTS } from '../../constants/constants';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Header = () => {
  const { currentUserDetails, setCurrentUserDetails } = useContext(AppContext);
  const logoutHandler = () =>{
    if(currentUserDetails.isLoggedIn)
    {
      setCurrentUserDetails({
        userName:"",
        isLoggedIn:false
      })
    }
  }
  return (
    <nav className={styles.header}>
      <img className={styles.logo} src={logo} alt="cine-flex-logo"/>
      <div className={styles.links}>
        <Link className={styles.home} to={CONSTANTS.HEADER.HOME_ROUTE}>{CONSTANTS.HEADER.HOME}</Link>
        <Link className={styles.allMovies} to={CONSTANTS.HEADER.ALL_MOVIES_ROUTE}>{CONSTANTS.HEADER.ALL_MOVIES}</Link>
        {currentUserDetails.isLoggedIn && <Link className={styles.nowShowing} to={CONSTANTS.HEADER.NOW_SHOWING_ROUTE}>{CONSTANTS.HEADER.NOW_SHOWING}</Link>}
      </div>
      <div className={styles.profile}>
        {currentUserDetails.isLoggedIn && <div className={styles.userName}>{`${CONSTANTS.HEADER.USER_GREETING} ${currentUserDetails.userName}`}</div>}
        <Link 
          className={currentUserDetails.isLoggedIn ? styles.login : styles.logout}
          to={currentUserDetails.isLoggedIn? CONSTANTS.HEADER.HOME_ROUTE : CONSTANTS.HEADER.LOGIN_ROUTE}
          onClick={logoutHandler}
        >
          {currentUserDetails.isLoggedIn? CONSTANTS.HEADER.LOGOUT: CONSTANTS.HEADER.LOGIN}
        </Link>
      </div> 
    </nav>
  )
}

export default Header