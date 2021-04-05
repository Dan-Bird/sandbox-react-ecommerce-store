import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import styles from './Collection.module.scss';

const Collection = ({ collection }) => {
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
