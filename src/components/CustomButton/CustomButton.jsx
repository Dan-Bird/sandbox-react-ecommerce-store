import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${styles['custom-button']} ${
        isGoogleSignIn && styles['custom-button--google-sign-in']
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
