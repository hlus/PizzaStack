import { makeVar } from '@apollo/client';

const CART_STATE_LS_KEY = 'cart_state';

export const cartState = makeVar<Record<string, number>>(JSON.parse(localStorage.getItem(CART_STATE_LS_KEY) || '{}'));

const saveAndUpdateCartState = (cart: Record<string, number>) => {
  cartState(cart);
  localStorage.setItem(CART_STATE_LS_KEY, JSON.stringify(cart));
};

export const addItemToCart = (id: string) => {
  const cart = { ...cartState() };

  const existingCartItem = cart[id];

  if (existingCartItem) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }

  saveAndUpdateCartState(cart);
};

export const changeItemAmount = (id: string, amount: number) => {
  const cart = { ...cartState() };

  if (amount === 0) {
    removeItemFromCart(id);
    return;
  }

  cart[id] = amount;

  saveAndUpdateCartState(cart);
};

export const removeItemFromCart = (id: string) => {
  const cart = { ...cartState() };

  delete cart[id];

  saveAndUpdateCartState(cart);
};
