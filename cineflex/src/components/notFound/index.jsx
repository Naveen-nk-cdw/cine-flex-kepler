import React from 'react'
import { CONSTANTS } from '../../constants/constants'
import styles from './notFound.module.scss'

const NotFound = () => {
    return (
        <div className={styles.notFoundMessage}>
            {CONSTANTS.NOT_FOUND.MESSAGE}
        </div>
    )
}

export default NotFound