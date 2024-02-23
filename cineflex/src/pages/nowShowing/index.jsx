import React, { memo } from 'react';
import styles from './nowShowing.module.scss';
import ShortTeaserVideo from '../../components/shortTeaserVideo';
import { CONSTANTS } from '../../constants/constants';

const NowShowing = () => {
    return (
        <div className={styles.containerLayout}>
            <div className={styles.container}>
                <div className={styles.heading}>{CONSTANTS.HEADER.NOW_SHOWING}</div>
                <h1 className={styles.videoHeading}>{CONSTANTS.TRAILER.SINTEL_HEADING}</h1>
                <div className={styles.contentContainer}>
                    <div className={styles.videoContainer}>
                        <ShortTeaserVideo
                            src={'https://tympanus.net/Development/SeatPreview/media/sintel.mp4'}
                            heading={CONSTANTS.TRAILER.SINTEL_DESCRIPTION}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(NowShowing);
