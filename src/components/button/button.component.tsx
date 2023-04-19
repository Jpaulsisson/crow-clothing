import React from 'react'
import '../button/button.styles.scss'


  const buttonTypeClasses = {
    google: 'google-sign-in',
    inverted: 'inverted',
  }


function Button({ children, buttonType, ...otherProps }) {

  return (
      <button 
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...otherProps}
      >
        {children}
      </button>
  )
}

export default Button
