import React, { useContext } from 'react'
import { AiFillLike } from "react-icons/ai";
import styles from './movieDescriptor.module.scss'
import { CONSTANTS } from '../../constants/constants';
import { decrementLike, incrementLike } from '../../utils/LikeHelper';
import { v4 as uuidv4 } from 'uuid';
import { AllMoviescontext } from '../../App';

const MovieDescriptor = ({movieHeading,likesCount,movieImgSrc,movieDescription,actors,movieId,isLiked}) => {
    const { moviesData, setMoviesData } = useContext(AllMoviescontext);
    const likeHandler = () =>{
        let updateData = !isLiked ? incrementLike(movieId, moviesData.data): decrementLike(movieId, moviesData.data) ;
        setMoviesData({
            data : updateData,
            ...moviesData,
        })
    }
  return (
    <>
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
                    actors.map(castName => {
                      return <div key={uuidv4()} className={styles.actorName}> {castName} </div>  
                    })
                }
            </div>
        </div>
    </>
  )
}

export default MovieDescriptor