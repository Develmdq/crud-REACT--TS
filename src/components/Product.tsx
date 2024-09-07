import { useContext, FC, MouseEvent } from "react";
import { Row, Btn } from "../style/StyledComponents";
import { DataContextType, Producto } from "../interfaces/interfaces";
import { ProductsContext } from "../context/ProductsContext";

const Product: FC<Producto> = ({ nombre, precio }) => {
  const { id, inputName, inputPrice, productos } = useContext(
    ProductsContext
  ) as DataContextType;

  const handleProducts = ( e: MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.dataset.btn;

    if (action === "editar") {
      inputName.current.focus();
      inputName.current.value = nombre;
      inputPrice.current.value = precio;
      // setId(e.target.id);
      // setIsUpdate(true);
    } else {
      productos?.filter(producto => producto.id !== id)
      // alertApp();
    }
  };

  return (
    <Row $background="#a0a0a0">
      <td>{nombre}</td>
      <td>$ {precio}</td>
      <td>
        <Btn $background="#abfcb8" onClick={handleProducts} data-btn={"editar"}>
          Editar
        </Btn>
        <Btn $background="#ff8888" onClick={handleProducts} data-btn={"borrar"}>
          Borrar
        </Btn>
      </td>
    </Row>
  );
};

export default Product;
