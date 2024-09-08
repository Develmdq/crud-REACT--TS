/* eslint-disable */
import actionsTypes from "./actionsTypes";

const productsReducer = (state, action) => {
  const { products, cart } = state;
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.viewProduct:
      return {
        ...state,
        visitedProduct: products.find((product) => product.id === payload),
      };
    case actionsTypes.addProductCart: {
      const newProduct = payload;
      const cartContainProduct = cart.find(
        (product) => product.id === newProduct.id
      );
      return cartContainProduct
        ? {
            ...state,
            cart: cart.map((product) =>
              product.id === newProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: [...cart, { ...payload, quantity: 1 }],
          };
    }
    case actionsTypes.removeProductsCart:
      return {
        ...state,
        cart: cart.filter((product) => product.id !== payload),
      };
    case actionsTypes.removeProductCart: {
      const productDelete = cart.find((product) => product.id === payload);
      return productDelete.quantity > 1
        ? {
            ...state,
            cart: cart.map((product) =>
              product.id === payload && product.quantity !== 0
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          }
        : {
            ...state,
            cart: cart.filter((product) => product.id !== payload),
          };
    }

    default:
      return state;
  }
};

export default productsReducer;
