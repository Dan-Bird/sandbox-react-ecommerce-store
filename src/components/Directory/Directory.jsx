import React, { useState } from 'react';
import sectionData from '../../data/directory.data';
import MenuItem from '../MenuItem/MenuItem';
import styles from './Directory.module.scss';

const Directory = () => {
  const [sections] = useState(sectionData);

  return (
    <div className={styles['directory-menu']}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
