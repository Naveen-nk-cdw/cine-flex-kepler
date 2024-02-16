import React, { memo } from 'react'
import styles from './letterIcon.module.scss'
/**
 * 
 * @param letterLabel label for the icon 
 * @returns 
 */
const LetterIcon = ({letterLabel}) => {
  return (
    <div className={styles.iconBox}>
        <div className={styles.wrapper}>{letterLabel}</div>
    </div>
  )
}

export default memo(LetterIcon);