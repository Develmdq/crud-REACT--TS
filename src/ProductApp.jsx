/* eslint-disable */
import { useReducer } from "react";
import productsReducer from "./productsReducer";
import initialProducts from "./initialProducts";
import actionsTypes from "./actionsTypes";

const ProductApp = () => {
  const [productsState, productsDispatch] = useReducer(
    productsReducer,
    initialProducts
  );
  const { products, cart, visitedProduct } = productsState;
  return (
    <>
      <ul>
        <h3>Products</h3>
        {products.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span> &nbsp;
            <button
              onClick={() =>
                productsDispatch({
                  type: actionsTypes.addProductCart,
                  payload: product,
                })
              }
            >
              Add Cart
            </button>
            &nbsp;
            <button
              onClick={() =>
                productsDispatch({
                  type: actionsTypes.viewProduct,
                  payload: product.id,
                })
              }
            >
              View Product
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        <h3>Cart</h3>
        {cart.map((product) => (
          <li key={product.id}>
            <span>{product.title}</span>&nbsp;{" "}
            <span>Quantity: {product.quantity}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                productsDispatch({
                  type: actionsTypes.removeProductCart,
                  payload: product.id,
                });
              }}
            >
              Remove One{" "}
            </button>
            &nbsp;
            <button
              onClick={() => {
                productsDispatch({
                  type: actionsTypes.removeProductsCart,
                  payload: product.id,
                });
              }}
            >
              Remove All{" "}
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h3>Visited Product</h3>
      <p>{visitedProduct.title}</p>
    </>
  );
};

export default ProductApp;
