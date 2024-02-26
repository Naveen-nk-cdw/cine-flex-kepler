import React, { memo, useContext, useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import styles from './movieDescriptor.module.scss';
import { CONSTANTS } from '../../constants/constants';
import { decrementLike, incrementLike } from '../../utils/LikeHelper';
import { v4 as uuidv4 } from 'uuid';
import { AllMoviescontext } from '../../App';

/**
 *
 * @param movieHeading consists of movie heading
 * @param likesCount consists of total likes
 * @param movieImgSrc poster for the movie
 * @param movieDescription description of the movie
 * @param actors array of casts
 * @param movieId id of the movie
 * @param isLiked boolean for repective like of the movie
 * @param isAdPlaying boolean to switch styles and img
 * @param triggerAd callback function for triggering the ad
 * @param resetAd callback function for resetting the ad
 * @returns
 */
const MovieDescriptor = ({
    movieHeading,
    likesCount,
    movieImgSrc,
    movieDescription,
    actors,
    movieId,
    isLiked,
    isAdPlaying,
    triggerAd,
    resetAd,
}) => {
    const { moviesData, setMoviesData } = useContext(AllMoviescontext);
    //triggers the ad on change of movie content
    useEffect(() => {
        resetAd();
        triggerAd && triggerAd(true);
    }, [movieHeading]);
    //Handles like action
    const likeHandler = () => {
        let updateData = !isLiked
            ? incrementLike(movieId, moviesData.data)
            : decrementLike(movieId, moviesData.data);
        setMoviesData({
            data: updateData,
            ...moviesData,
        });
    };
    return (
        <>
            <div className={!isAdPlaying ? styles.movieDescriptorContainer : styles.hide}>
                <div className={styles.headerContainer}>
                    <h1 className={styles.heading}>{movieHeading}</h1>
                    <AiFillLike
                        data-testid = 'like-icon'
                        className={`${styles.likeIcon} ${isLiked ? styles.liked : ''}`}
                        onClick={likeHandler}
                    />
                </div>
                <div className={styles.likesCount}>
                    {`${likesCount} ${CONSTANTS.ALLMOVIES.LIKES_LABEL}`}
                </div>
                <div className={styles.posterContainer}>
                    <img src={movieImgSrc} alt='movie poster' />
                </div>
                <div className={styles.description}>{movieDescription}</div>
                <div className={styles.castContainer}>
                    <div className={styles.castHeading}>{CONSTANTS.ALLMOVIES.ACTORS_LABEL}</div>
                    <div className={styles.castList}>
                        {actors?.map((castName) => {
                            return (
                                <div key={uuidv4()} className={styles.actorName}>
                                    {castName}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={isAdPlaying ? styles.adPoster : styles.hide}>
                <img src={movieImgSrc} alt='ad poster' />
            </div>
        </>
    );
};

export default memo(MovieDescriptor);
