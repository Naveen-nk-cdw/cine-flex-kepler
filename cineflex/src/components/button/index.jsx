import React, { memo } from 'react';
import styles from './button.module.scss';
/**
 *
 * @param onClick callback for onclick
 * @param label label for button
 * @param type based on button type styles are switched
 * @disabled boolean to control the button
 * @returns
 */
const Button = ({ onClick, label, designType, disabled, ...props }) => {
    return (
        <button
            className={`${designType ? styles[`${designType}Button`] : ''} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {label}
        </button>
    );
};

export default memo(Button);