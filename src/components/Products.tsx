import { useContext} from "react";
import { ProductsContext } from "../context";
import { DataContextType } from "../interfaces/interfaces";
import Product from "./Product";

const Products = () => {
  const { products } = useContext(ProductsContext) as DataContextType;

  return (
    <>
      {products?.map((product) => (
        <Product
          key={product.id}
          nombre={product.nombre}
          precio={product.precio}
          id={product.id}
        />
      ))}
    </>
  );
};

export default Products;
