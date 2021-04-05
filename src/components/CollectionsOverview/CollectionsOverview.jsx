import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import styles from './CollectionsOverview.module.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className={styles['collections-overview']}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
