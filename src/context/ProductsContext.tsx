import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import {
  PropsChildren,
  DataContextType,
} from "../interfaces/interfaces";


export const ProductsContext = createContext<DataContextType>({}as DataContextType);


const ProductsProvider = ({ children }: PropsChildren) => {
  const { isLoading, productos } = useFetch("http://localhost:3000/productos");
  return (
    <ProductsContext.Provider value={{ isLoading, productos }}>
      {children}
    </ProductsContext.Provider>
  );
};


export default ProductsProvider;
