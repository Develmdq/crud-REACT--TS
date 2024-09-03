import Product from "./Product";
import { PropsProductos } from "../interfaces/interfaces";



const Products: React.FC<PropsProductos> = ({ productos }) => {
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
