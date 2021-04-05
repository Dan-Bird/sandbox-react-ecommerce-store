import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import DIRECTORY_DATA from '../../data/directory.data.js';
import styles from './Directory.module.scss';

const Directory = ({ sections }) => {
  return (
    <div className={styles['directory-menu']}>
      {DIRECTORY_DATA.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
