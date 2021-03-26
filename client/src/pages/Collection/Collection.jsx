import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
