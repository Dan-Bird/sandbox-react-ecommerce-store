import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = () => (
  <div className={styles['spinner-overlay']}>
    <div className={styles['spinner-container']}></div>
  </div>
);

export default Spinner;
