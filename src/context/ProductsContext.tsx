import { createContext, useEffect, useReducer, useRef, useState } from "react";
import { PropsChildren } from "../interfaces/interfaces";
import fetchProducts from "../fetching/fetchProducts";
import productsAction from "./productsAction";
import productsReducer from "./productsReducer";

const ProductsContext = createContext({});

const ProductsProvider = ({ children }: PropsChildren) => {
  const [products, productsDispatch] = useReducer(productsReducer, []);
  const [isUpdate, setIsUpdate] = useState(false);
  const [dataForm, setDataForm] = useState({ nombre: "", precio: "" });
  const [id, setId ] = useState('')
  const inputName = useRef();
  const inputPrice = useRef();

  useEffect(() => {
    fetchProducts("productos", "GET").then((products) =>
      productsDispatch({
        type: productsAction.FETCH_PRODUCTS_GET,
        payload: products,
      })
    );
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isUpdate,
        inputName,
        inputPrice,
        dataForm,
        id,
        productsDispatch,
        setIsUpdate,
        setDataForm,
        setId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
