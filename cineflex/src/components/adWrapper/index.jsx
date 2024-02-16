import React, { useState } from "react";
import Counter from "../counter";
import styles from "./adWrapper.module.scss";
import { CONSTANTS } from "../../constants/constants";

/**
 * 
 * @param  Component the child component that needs to be wrapped
 * @param  adIn amount of duration before ad
 * @param  resumeIn amount of duration of an ad
 * @param  type child component type
 * @param  adImg adimg which need to be displayed
 * @returns 
 */
const AdWrapper = (Component, adIn, resumeIn, type, adImg) => {
  return function AdWrapperComponent({ posterSrc, ...props }) {
    //states for controlling pause showing timer and AD
    const [adDuration, setAdDuration] = useState();
    const [showTimer, setShowTimer] = useState(false);
    const [ad, setAd] = useState(null);
    const [adPrefix, setAdPrefix] = useState();
    const [adSrc, setAdSrc] = useState(posterSrc);
    const [isAdDisplayed, setIsAdDisplayed] = useState(false);
    const [isAdPaused, setIsAdPaused] = useState(false);
    const [adCompleted, setAdCompleted] = useState(null);

    //resets the ad states to intial state
    const resetAd = () => {
      setShowTimer(false);
      setIsAdPaused(false);
      setIsAdDisplayed(false);
      setAdCompleted(false);
      setAd(false);
      setAdSrc(posterSrc);
    };

    //Helps to start the AD
    const triggerAd = (trigger = null, newTimer = null) => {
      setAdDuration(adIn);
      if (adCompleted === null || trigger) {
        setShowTimer(true);
      }
      setIsAdPaused(false);
      setAdPrefix(CONSTANTS.ADWRAPPER.START);
    };
    //Helper to switch the counters end time functionality
    const handleEndTimer = () => {
      ad ? closeAd() : switchAd();
    };
    //Pause the ad on video pause
    const handlePause = () => {
      setIsAdPaused(true);
    };
    //Displays ad once pre ad time is completed
    const switchAd = () => {
      setAdPrefix(CONSTANTS.ADWRAPPER.END);
      setAdDuration(resumeIn);
      setAd(!ad);
      setAdSrc(adImg);
    };
    //Completes the ad
    const closeAd = () => {
      setAd(!ad);
      setShowTimer(!showTimer);
      setAdSrc(posterSrc);
      setAdCompleted(true);
      setIsAdDisplayed(true);
    };
    //Mapper to map the child components
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
              className={
                type === "shortTeaser" ? styles.shortTeaserCounter : styles.counter
              }
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
  };
};

export default AdWrapper;
