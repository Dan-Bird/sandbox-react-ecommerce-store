import React, { useState } from 'react';
import initialState from '../../data/shop.data';

const Shop = () => {
  const [shopData] = useState(initialState);
  return <div>Shop page</div>;
};

export default Shop;
