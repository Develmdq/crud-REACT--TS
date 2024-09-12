import productsAction from "./productsAction";
import { Producto } from "../interfaces/interfaces";

const productsReducer = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case productsAction.FETCH_PRODUCTS_GET:
      return payload;
    case productsAction.FETCH_PRODUCT_CREATE:
      return [...state, payload];
    case productsAction.FETCH_PRODUCT_DELETE:
      return state.filter((producto: Producto) => producto.id !== payload.id);
    case productsAction.FETCH_PRODUCT_UPDATE:      
      return state.map((producto: Producto) => producto.id === payload.id ? payload : producto);

    default:
      return state;
  }
};
 
export default productsReducer;
