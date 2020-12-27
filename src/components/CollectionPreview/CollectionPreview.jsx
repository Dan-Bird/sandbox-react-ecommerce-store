import React from 'react';
import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={styles['collection-preview']}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.preview}>
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
