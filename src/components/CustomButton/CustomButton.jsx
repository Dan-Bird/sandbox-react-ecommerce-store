import React from 'react';
import styles from './CustomButton.module.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${styles['custom-button']}
          ${isGoogleSignIn ? styles['custom-button--google-sign-in'] : ''}
          ${inverted ? styles['custom-button--inverted'] : ''}
        `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
