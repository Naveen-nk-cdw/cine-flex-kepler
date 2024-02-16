import React, { memo, useContext } from 'react';
import styles from './header.module.scss'
import logo from '../../assets/logo.png'
import { CONSTANTS } from '../../constants/constants';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../../App';

const Header = () => {
  const { currentUserDetails, setCurrentUserDetails } = useContext(AppContext);
  //Resets the context on Logout
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
        <NavLink className={({isActive})=>isActive?`${styles.active} ${styles.home}`:styles.home} to={CONSTANTS.HEADER.HOME_ROUTE}>{CONSTANTS.HEADER.HOME}</NavLink>
        <NavLink className={({isActive})=>isActive?`${styles.active} ${styles.allMovies}`:styles.allMovies} to={CONSTANTS.HEADER.ALL_MOVIES_ROUTE}>{CONSTANTS.HEADER.ALL_MOVIES}</NavLink>
        {currentUserDetails.isLoggedIn && <NavLink className={({isActive})=>isActive?`${styles.active} ${styles.nowShowing}`:styles.nowShowing} to={CONSTANTS.HEADER.NOW_SHOWING_ROUTE}>{CONSTANTS.HEADER.NOW_SHOWING}</NavLink>}
      </div>
      <div className={styles.profile}>
        {currentUserDetails.isLoggedIn && <div className={styles.userName}>{`${CONSTANTS.HEADER.USER_GREETING} ${currentUserDetails.userName}`}</div>}
        <NavLink 
          className={currentUserDetails.isLoggedIn ? styles.login : styles.logout}
          to={currentUserDetails.isLoggedIn? CONSTANTS.HEADER.HOME_ROUTE : CONSTANTS.HEADER.LOGIN_ROUTE}
          onClick={logoutHandler}
        >
          {currentUserDetails.isLoggedIn? CONSTANTS.HEADER.LOGOUT: CONSTANTS.HEADER.LOGIN}
        </NavLink>
      </div> 
    </nav>
  )
}

export default memo(Header);