import React, { useState } from 'react'
import Counter from '../counter';
import styles from './adWrapper.module.scss';
import { CONSTANTS } from '../../constants/constants';
import smallAdImg from '../../assets/advertisements/small-promos/Advertisement-Small-2.png'

const AdWrapper = (Component, adIn, resumeIn, src, heading) => {
    const [adDuration,setAdDuration] = useState();
    const [showTimer,setShowTimer] = useState(false);
    const [ad,setAd] = useState(null);
    const [adPrefix,setAdPrefix] = useState();
    const [adSrc,setAdSrc] = useState(src);
    const [isAdDisplayed, setIsAdDisplayed] = useState(false);
    const [isAdPaused, setIsAdPaused] = useState(false);
    const [adCompleted, setAdCompleted] = useState(null);
    // const [timeEndHandler,setTimeEndHandler] = useState();
    const triggerAd = () =>{
        if(adCompleted === null )
        {
            setShowTimer(!showTimer);
        }
        setIsAdPaused(false);
        setAdCompleted(false);
        setAdDuration(adIn);
        setAdPrefix(CONSTANTS.ADWRAPPER.START);
    }
    const handleEndTimer = () =>{
        ad?closeAd():switchAd()
    }
    const handlePause = () =>{
        setIsAdPaused(true);
    }
    const switchAd = () =>{
        setAdPrefix(CONSTANTS.ADWRAPPER.END);
        setAdDuration(resumeIn);
        setAd(!ad);
        setAdSrc(smallAdImg);
    }
    const closeAd = () => {
        setAd(!ad);
        setShowTimer(!showTimer);
        setAdSrc(src);
        setAdCompleted(true);
        setIsAdDisplayed(true);
    }
    return (
        <div className={styles.container}>
            <Component src={adSrc} heading={heading} isAdDisplayed={isAdDisplayed} isAdPlaying={ad} onPlay={triggerAd} onPause={handlePause}/>
            {showTimer && <Counter className={styles.counter} initialMinutes={0} initialSeconds={adDuration} onTimeEnd={handleEndTimer} prefix={adPrefix} isPaused={isAdPaused}/> }
        </div>
    )
}

export default AdWrapper