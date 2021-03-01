import React from 'react';
import styles from './WithSpinner.module.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className={styles.spinnerOverlay}>
      <div className={styles.spinnerContainer}></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
