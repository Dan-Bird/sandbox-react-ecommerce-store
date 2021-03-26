import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections-context';
import CollectionPreview from '../CollectionPreview/CollectionPreview';
import styles from './CollectionsOverview.module.scss';

const CollectionsOverview = () => {
  const collectionsMap = useContext(CollectionsContext);
  const collections = Object.keys(collectionsMap).map(
    key => collectionsMap[key]
  );

  return (
    <div className={styles['collections-overview']}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
