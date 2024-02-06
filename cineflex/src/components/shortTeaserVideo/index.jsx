import React, { useRef, useState } from 'react'
import styles from './shortTeaserVideo.module.scss'
import { FaPlayCircle } from "react-icons/fa";

const ShortTeaserVideo = ({ src, width = '100%', isAdPlaying, onPlay = null, onPause = null, heading = null}) => {
    const videoRef = useRef(null);
    const [isVideoPlaying, setIsVideoplaying] = useState(false)
    const startPlay = () => {
        const player = videoRef.current;
        player.play()
        setIsVideoplaying(true)
        if(onPlay)
        {
            onPlay();
        }
    }

    const pausePlay = (event) => {
        const player = videoRef.current;
        player.pause()
        setIsVideoplaying(false)
        if(onPause)
        {
            onPause();
        }
        event.nativeEvent.stopImmediatePropagation();
    }
   
    
    return (    
        <div className={styles.container}>  
            {isAdPlaying ? <div className={styles.videoContainer}>
                <video ref={videoRef} src={src}  width={width} onClick={isVideoPlaying? pausePlay : null} onPause={pausePlay} controls={isVideoPlaying}/>
                { !isVideoPlaying && <FaPlayCircle className={styles.playIcon} onClick={startPlay}/>}
            </div>
            : <img src={src} alt="ad"/>}
            <div className={styles.heading}>
                {heading}
            </div>
        </div>        
    )
}

export default ShortTeaserVideo