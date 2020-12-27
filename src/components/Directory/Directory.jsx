import React, { useState } from 'react';
import sectionData from '../../directory.data';
import MenuItem from '../MenuItem/MenuItem';
import styles from './Directory.module.scss';

const Directory = () => {
  const [sections] = useState(sectionData);

  return (
    <div className={styles['directory-menu']}>
      {sections.map(({ title, id, imageUrl, isLarge }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          isLarge={isLarge}
        />
      ))}
    </div>
  );
};

export default Directory;
