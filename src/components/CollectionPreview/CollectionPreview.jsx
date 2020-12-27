import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';

import styles from './CollectionPreview.module.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <section className={styles['collection-preview']}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.preview}>
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </section>
  );
};

export default CollectionPreview;
