import React, { memo, useContext } from 'react';
import styles from './trailer.module.scss';
import { CONSTANTS } from '../../constants/constants';
import { Link, useNavigate } from 'react-router-dom';
import trailerImage from '../../assets/sindel-background.png';
import { AppContext } from '../../App';
import Button from '../button';

const Trailer = () => {
    const navigate = useNavigate();
    const { currentUserDetails } = useContext(AppContext);
    //redirects to watch now
    const handleWatchNow = () => {
        navigate(CONSTANTS.HEADER.NOW_SHOWING_ROUTE);
    };
    return (
        <>
            <h1 className={styles.heading}>{CONSTANTS.TRAILER.HEADING}</h1>
            {!currentUserDetails.isLoggedIn && (
                <div className={styles.signIn}>
                    {CONSTANTS.TRAILER.SIGIN_IN_PREFIX}
                    <Link className={styles.signInLink} to={CONSTANTS.HEADER.NOW_SHOWING_ROUTE}>
                        {CONSTANTS.TRAILER.SIGNI_IN}
                    </Link>
                </div>
            )}
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <img src={trailerImage} alt='Sintel' />
                </div>
                <div className={styles.rightContainer}>
                    <h2>{CONSTANTS.TRAILER.SINTEL_HEADING}</h2>
                    <p>{CONSTANTS.TRAILER.SINTEL_DESCRIPTION}</p>
                    <Button
                        label={CONSTANTS.TRAILER.WATCHNOW_BUTTON_LABEL}
                        type={'primary'}
                        onClick={handleWatchNow}
                    />
                </div>
            </div>
        </>
    );
};

export default memo(Trailer);
