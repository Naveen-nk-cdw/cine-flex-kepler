import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './shortTeaserVideo.module.scss';
import { FaPlayCircle } from 'react-icons/fa';

const ShortTeaserVideo = ({
    src,
    width = '100%',
    isAdPlaying = null,
    isAdDisplayed = null,
    onPlay = null,
    onPause = null,
    heading = null,
    playTimerOnResume = 0
}) => {
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoplaying] = useState(false);
    //resumes once ad completed
    useEffect(()=>{
        if(isAdDisplayed)
        {
            const player = videoRef?.current;
            player.currentTime = playTimerOnResume;
            player?.play();
        }
    },[isAdDisplayed])
    const startPlay = useCallback(() => {
        const player = videoRef?.current;
        player?.play();
        setIsVideoplaying(true);
        if (!isAdDisplayed && onPlay) {
            onPlay(true,player);
        }
    }, [isAdDisplayed, onPlay]);

    const pausePlay = () => {
        setIsVideoplaying(false);
        if (!isAdDisplayed && onPause) {
            onPause();
        }
    };

    useEffect(() => {
        if (isAdPlaying) {
            const player = videoRef.current;
            player.pause();
        } else if (isAdPlaying !== null) {
            startPlay();
        }
    }, [isAdPlaying, startPlay]);

    return (
        <div className={styles.container}>
            <div className={!isAdPlaying ? styles.videoContainer : styles.hide}>
                <video
                    ref={videoRef}
                    src={src}
                    width={width}
                    onPause={pausePlay}
                    controls={isVideoPlaying}
                    data-testid="videoPlayer"
                    poster={
                        'https://static.vecteezy.com/system/resources/previews/005/086/584/non_2x/beautiful-landscape-with-trees-in-autumn-season-free-vector.jpg'
                    }
                />
                {!isVideoPlaying && (
                    <FaPlayCircle data-testid = 'playIcon' className={styles.playIcon} onClick={startPlay} />
                )}
            </div>
            <img className={isAdPlaying ? styles.videoContainer : styles.hide} src={src} alt='ad' />
            <div className={styles.heading}>{heading}</div>
        </div>
    );
};

export default ShortTeaserVideo;
