import Product from "./Product";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { productos } = useFetch("http://localhost:3000/productos");
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
