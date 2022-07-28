import React from 'react'
import styles from './Button.css'

const Button = ({text, event}) => {
  return (
    <button type='text' className={styles.Buttonz} onClick={event}>{text}</button>
  )
}

export default Button