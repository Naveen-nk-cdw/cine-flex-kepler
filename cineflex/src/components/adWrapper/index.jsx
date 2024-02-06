import React, { useState } from 'react'
import Counter from '../counter';
import styles from './adWrapper.module.scss';

const AdWrapper = (Component, adIn, resumeIn, src, heading) => {
    const [adDuration,setAdDuration] = useState();
    const [ad,setAd] = useState(false);
    const triggerAd = () =>{
        setAd((prevAd)=>!prevAd);
    }
    return (
        <div>
            <Component src={src} heading={heading} isAdPlaying={true} onPlay={triggerAd} onPause={triggerAd}/>
            {ad && <Counter className={styles.counter} initialMinutes={0} initialSeconds={30} onTimeEnd={triggerAd}/>}
        </div>
    )
}

export default AdWrapper