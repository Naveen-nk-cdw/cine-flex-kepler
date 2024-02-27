import React, { useCallback, useContext, useEffect, useState } from 'react';
import styles from './allMovie.module.scss';
import { CONSTANTS } from '../../constants/constants';
import { AllMoviescontext } from '../../App';
import MovieCard from '../movieCard';
import Button from '../../components/button';
import MovieDescriptor from '../../components/movieDescriptor';
import { getSelectedMovie } from '../../utils/LikeHelper';
import AdWrapper from '../../components/adWrapper';
import largeAd from '../../assets/advertisements/large-promos/adv1.png';

const AdWrappedMovieDescriptor = AdWrapper(MovieDescriptor, 15, 5, 'movieDescriptor', largeAd);

const AllMovies = () => {
    //states to maintain movie data from context
    const { moviesData } = useContext(AllMoviescontext);
    //state to store curretnly selected movie
    const [selectedMovie, setSelectedMovie] = useState(
        getSelectedMovie(moviesData?.selectedMovie, moviesData?.data),
    );
    //state to toggle loadmore button
    const [loadMore, setLoadMore] = useState(true);
    //state to store page details
    const [currentPage, setCurrentPage] = useState(1);

    // Total number of pages
    const totalPages = Math.ceil(moviesData?.data?.length / CONSTANTS.ALLMOVIES.PAGE_SIZE);

    // items for current pgae
    const startIndex = (currentPage - 1) * CONSTANTS.ALLMOVIES.PAGE_SIZE;
    const endIndex = startIndex + CONSTANTS.ALLMOVIES.PAGE_SIZE;
    const pageinationData = moviesData?.data?.slice(0, endIndex);

    // Handle page change
    const handlePageChange = () => {
        if (currentPage + 1 === totalPages) {
            setLoadMore(false);
        }
        setCurrentPage(currentPage + 1);
    };

    //creates all movie cards
    const movieCards = useCallback(
        pageinationData?.map((data) => {
            return (
                <MovieCard
                    key={data.id}
                    imgSrc={data.link}
                    movieName={data.movie}
                    likesCounts={data.likes}
                    movieId={data.id}
                    isLiked={data.isLiked}
                />
            );
        }),
        [pageinationData],
    );

    //resets the selected movie data
    useEffect(() => {
        setSelectedMovie(getSelectedMovie(moviesData.selectedMovie, moviesData.data));
    }, [moviesData]);

    return (
        <div className={styles.allMovieContainerLayout}>
            <div className={styles.allMovieContainer}>
                <h1 className={styles.heading}>{CONSTANTS.HEADER.ALL_MOVIES}</h1>
                <div className={styles.contentContainer}>
                    <div className={styles.leftContainer}>
                        <div className={styles.moviePosterContainer}>{movieCards}</div>
                        {loadMore && (
                            <Button
                                onClick={handlePageChange}
                                label={CONSTANTS.ALLMOVIES.LOAD_MORE_LABEL}
                                designType={'loadMore'}
                            />
                        )}
                    </div>
                    <div className={styles.rightContainer}>
                        <AdWrappedMovieDescriptor
                            key={selectedMovie?.id}
                            movieId={selectedMovie?.id}
                            movieHeading={selectedMovie?.movie}
                            movieDescription={selectedMovie?.description}
                            likesCount={selectedMovie?.likes}
                            actors={selectedMovie?.actors}
                            isLiked={selectedMovie?.isLiked}
                            posterSrc={selectedMovie?.link}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMovies;
