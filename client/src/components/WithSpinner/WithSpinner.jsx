import React from 'react';
import styles from './WithSpinner.module.scss';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className={styles['spinner-overlay']}>
      <div className={styles['spinner-container']}></div>
    </div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
