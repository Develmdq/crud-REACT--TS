import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import Product from "./Product";

const Products = () => {
  const {productos} = useContext(ProductsContext)
  return (
    <>
      {productos?.map((producto) => (
        <Product
          key={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
        />
      ))}
    </>
  );
};

export default Products;
