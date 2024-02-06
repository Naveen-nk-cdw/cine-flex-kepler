import React from 'react'
import styles from './button.module.scss'
const Button = ({ onClick, label, type, disabled }) => {
  return (
    <button
      className={`${type ? styles[`${type}Button`] : ''} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button