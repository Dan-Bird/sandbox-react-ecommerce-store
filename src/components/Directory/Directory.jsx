import React, { useContext } from 'react';
import DirectoryContext from '../../contexts/directory/directory-context';
import MenuItem from '../MenuItem/MenuItem';
import styles from './Directory.module.scss';

const Directory = () => {
  const sections = useContext(DirectoryContext);

  return (
    <div className={styles['directory-menu']}>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
