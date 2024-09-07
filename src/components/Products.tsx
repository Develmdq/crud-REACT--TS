import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "./Product";
import { DataContextType } from "../interfaces/interfaces";

const Products = () => {
  const { productos } = useContext(ProductsContext) as DataContextType
  return (
    <>
      {productos?.map((producto) => (
        <Product
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          id={producto.id}
        />
      ))}
    </>
  );
};

export default Products;
