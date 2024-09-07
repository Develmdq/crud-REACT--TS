import { createContext, useState, useRef, MutableRefObject } from "react";
import { PropsChildren } from "../interfaces/interfaces";
import useFetch from "../hooks/useFetch";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }: PropsChildren) => {
  const [id, setId] = useState();

  const inputName = useRef<MutableRefObject<HTMLInputElement>>();
  const inputPrice = useRef<MutableRefObject<HTMLInputElement>>();
  const [isUpdate, setIsUpdate] = useState(false);
  const { isLoading, productos } = useFetch("http://localhost:3000/productos");

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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
