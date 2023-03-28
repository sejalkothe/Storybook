import React from 'react'
import './Button.css'

function Button(props) {
    const {backgroundColor, children, ...rest}=props

  return (
    <button className={`button`}  style={backgroundColor && {backgroundColor}} {...rest}>
    {children}
    </button>
  )
}

export default Button