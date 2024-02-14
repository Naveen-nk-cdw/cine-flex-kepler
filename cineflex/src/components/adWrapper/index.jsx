import React, { useState } from "react";
import Counter from "../counter";
import styles from "./adWrapper.module.scss";
import { CONSTANTS } from "../../constants/constants";

const AdWrapper = (Component, adIn, resumeIn, type, adImg) => {
    return function AdWrapperComponent({posterSrc,...props}){
        const [adDuration, setAdDuration] = useState();
        const [showTimer, setShowTimer] = useState(false);
        const [ad, setAd] = useState(null);
        const [adPrefix, setAdPrefix] = useState();
        const [adSrc, setAdSrc] = useState(posterSrc);
        const [isAdDisplayed, setIsAdDisplayed] = useState(false);
        const [isAdPaused, setIsAdPaused] = useState(false);
        const [adCompleted, setAdCompleted] = useState(null);
        const resetAd = () => {
        setShowTimer(false);
        setIsAdPaused(false);
        setIsAdDisplayed(false);
        setAdCompleted(false);
        setAd(false);
        setAdSrc(posterSrc);
        };
        const triggerAd = (trigger = null, newTimer = null) => {
        
        setAdDuration(adIn);
        if (adCompleted === null || trigger) {
            setShowTimer(true);
        }
        setIsAdPaused(false);
        setAdPrefix(CONSTANTS.ADWRAPPER.START);
        };
        const handleEndTimer = () => {
        ad ? closeAd() : switchAd();
        };
        const handlePause = () => {
        setIsAdPaused(true);
        };
        const switchAd = () => {
        setAdPrefix(CONSTANTS.ADWRAPPER.END);
        setAdDuration(resumeIn);
        setAd(!ad);
        setAdSrc(adImg);
        };
        const closeAd = () => {
        setAd(!ad);
        setShowTimer(!showTimer);
        setAdSrc(posterSrc);
        setAdCompleted(true);
        setIsAdDisplayed(true);
        };
        const componentMapper = {
        shortTeaser: (
            <Component
                src={adSrc}
                {...props}
                isAdDisplayed={isAdDisplayed}
                isAdPlaying={ad}
                onPlay={triggerAd}
                onPause={handlePause}
            />
        ),
        movieDescriptor: (
            <Component
                movieImgSrc={adSrc}
                {...props}
                isAdPlaying={ad}
                triggerAd={triggerAd}
                resetAd={resetAd}
            />
        ),
        };
        return (
        <>
            <div
            className={
                type === "shortTeaser" ? styles.container : styles.largeAdContainer
            }
            >
            {componentMapper[type]}
            {showTimer && (
                <Counter
                className={styles.counter}
                initialMinutes={0}
                initialSeconds={adDuration}
                onTimeEnd={handleEndTimer}
                prefix={adPrefix}
                isPaused={isAdPaused}
                />
            )}
            </div>
        </>
        );
    
    }
  };

export default AdWrapper;
