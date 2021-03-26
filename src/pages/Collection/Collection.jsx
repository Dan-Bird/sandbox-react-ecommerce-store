import React, { useContext } from 'react';
import CollectionsContext from '../../contexts/collections/collections-context';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import styles from './Collection.module.scss';

const Collection = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <section className={styles['collection-page']}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
