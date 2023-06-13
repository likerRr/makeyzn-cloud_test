import React from 'react'
import classes from './Input.module.css'

const Input = () => {
  return (
    <label className={classes.label}>
        Номер телефона
        <input type="text" />
    </label>
  )
}

export default Input
