import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../CustomButton/CustomButton';
import styles from './CollectionItem.module.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <article className={styles['collection-item']}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <footer className={styles.footer}>
        <span className={styles.name}>{name}</span>
        <span>£{price}</span>
      </footer>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </CustomButton>
    </article>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
