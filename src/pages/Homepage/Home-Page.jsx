import React from 'react';
import Directory from '../../components/Directory/Directory';
import styles from './Home-Page.module.scss';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};

export default Homepage;
