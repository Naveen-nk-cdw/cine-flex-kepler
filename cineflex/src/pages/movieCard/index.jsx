import React, { useContext } from 'react';
import styles from './movieCard.module.scss';
import { AiFillLike } from "react-icons/ai";
import { AllMoviescontext } from '../../App';
import { decrementLike, incrementLike } from '../../utils/LikeHelper';

const MovieCard = ({imgSrc, movieName, likesCounts, movieId, isLiked}) => {
    const { moviesData, setMoviesData } = useContext(AllMoviescontext);
    const incrementLikeHandler = () =>{
        let updateData = !isLiked ? incrementLike(movieId, moviesData.data): decrementLike(movieId, moviesData.data);
        setMoviesData({
            data : updateData,
            ...moviesData,
        })
    }
    const moviePosterHandler = () =>{
        setMoviesData({
            ...moviesData,
            selectedMovie : movieId
        })
    }
    return (
        <div className={styles.cardContainer}>
            <img src={imgSrc} onClick={moviePosterHandler} alt="movie" />
            <div className={styles.bottomContainer}>
                <div>
                    <div>{movieName}</div>
                    <div>{likesCounts}</div>
                </div>
                <AiFillLike className={`${styles.likeIcon} ${isLiked ? styles.liked : ''}`} onClick={incrementLikeHandler}/>
            </div>
            
        </div>
    )
}

export default MovieCard