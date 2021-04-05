const findExistingCartItem = (cartItems, cartItemToFind) => {
  return cartItems.find(cartItem => cartItem.id === cartItemToFind.id);
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = findExistingCartItem(cartItems, cartItemToAdd);

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = findExistingCartItem(cartItems, cartItemToRemove);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

export const getCartItemCount = cartItems =>
  cartItems.reduce(
    (accumulated, currentItem) => accumulated + currentItem.quantity,
    0
  );
