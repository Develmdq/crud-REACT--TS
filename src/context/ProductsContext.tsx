import { createContext, useState, useRef } from "react";
import { PropsChildren } from "../interfaces/interfaces";
import useFetch from "../hooks/useFetch";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }: PropsChildren) => {
  const [id, setId] = useState(0);

  const inputName = useRef();
  const inputPrice = useRef();
  const [isUpdate, setIsUpdate] = useState(false);
  const { isLoading, productos, setProductos } = useFetch("get");

  return (
    <ProductsContext.Provider
      value={{
        productos,
        isLoading,
        isUpdate,
        inputName,
        inputPrice,
        id,
        setId,
        setIsUpdate,
        setProductos,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
