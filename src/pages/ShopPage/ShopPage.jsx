import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';
import initialState from '../../data/shop.data';

const Shop = () => {
  const [shopData] = useState(initialState);
  return (
    <div>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
