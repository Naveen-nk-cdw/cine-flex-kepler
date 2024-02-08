import React from 'react'
import styles from './letterIcon.module.scss'
const LetterIcon = ({letterLabel}) => {
  return (
    <div className={styles.iconBox}>
        <div className={styles.wrapper}>{letterLabel}</div>
    </div>
  )
}

export default LetterIcon