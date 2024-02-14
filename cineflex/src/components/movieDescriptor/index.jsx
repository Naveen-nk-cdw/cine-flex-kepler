import React, { useContext, useEffect } from 'react'
import { AiFillLike } from "react-icons/ai";
import styles from './movieDescriptor.module.scss'
import { CONSTANTS } from '../../constants/constants';
import { decrementLike, incrementLike } from '../../utils/LikeHelper';
import { v4 as uuidv4 } from 'uuid';
import { AllMoviescontext } from '../../App';

const MovieDescriptor = ({movieHeading,likesCount,movieImgSrc,movieDescription,actors,movieId,isLiked,isAdPlaying,triggerAd,resetAd}) => {
    const { moviesData, setMoviesData } = useContext(AllMoviescontext);
    useEffect(()=>{
        resetAd();
        triggerAd && triggerAd(true);        
    },[movieHeading])
    const likeHandler = () =>{
        let updateData = !isLiked ? incrementLike(movieId, moviesData.data): decrementLike(movieId, moviesData.data) ;
        setMoviesData({
            data : updateData,
            ...moviesData,
        })
    }
  return (
    <>
        <div className={!isAdPlaying ?styles.movieDescriptorContainer : styles.hide}>
            <div className={styles.headerContainer}>
                <h1 className={styles.heading}>
                    {movieHeading}
                </h1>            
                <AiFillLike className={`${styles.likeIcon} ${isLiked ? styles.liked : ''}`} onClick={likeHandler}/>
            </div>
            <div className={styles.likesCount}>
                {`${likesCount} ${CONSTANTS.ALLMOVIES.LIKES_LABEL}`}
            </div>
            <div className={styles.posterContainer}>
                <img src={movieImgSrc} alt="movie poster" />
            </div>
            <div className={styles.description}>
                {movieDescription}
            </div>
            <div className={styles.castContainer}>
                <div className={styles.castHeading}>
                    {CONSTANTS.ALLMOVIES.ACTORS_LABEL}
                </div>
                <div className={styles.castList}>
                    {
                        actors?.map(castName => {
                        return <div key={uuidv4()} className={styles.actorName}> {castName} </div>  
                        })
                    }
                </div>
            </div>
        </div>
        <div className={isAdPlaying ?styles.adPoster : styles.hide}>
            <img src={movieImgSrc} alt="movie poster" />
        </div>
    </>
  )
}

export default MovieDescriptor