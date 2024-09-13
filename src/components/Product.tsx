import { useContext, FC, MouseEvent } from "react";
import { Row, Btn } from "../style/StyledComponents";
import { ProductsContext, productsAction } from "../context";
import { DataContextType, Producto } from "../interfaces/interfaces";
import { alertApp } from "../utils";
import fetchProducts from "../fetching/fetchProducts";

const Product: FC<Producto> = ({ id, nombre, precio }) => {
  const { productsDispatch, inputName, setIsUpdate, setDataForm, setId } =
    useContext(ProductsContext) as DataContextType;

  const handleProducts = (e: MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.dataset.btn as string;
    if (action === "eliminar") {
      alertApp(action, nombre, deleteProduct);
    } else {
      inputName.current.focus();
      setDataForm({ nombre, precio });
      setIsUpdate(true);
      setId(e.currentTarget.dataset.id);
    }
  };

  const deleteProduct = async () => {
    fetchProducts(`productos/${id}`, "DELETE").then((response) => {
      productsDispatch({
        type: productsAction.FETCH_PRODUCT_DELETE,
        payload: response,
      });
    });
  };

  return (
    <Row $background="#a0a0a0">
      <td>{nombre}</td>
      <td>$ {precio}</td>
      <td>
        <Btn
          $background="#abfcb8"
          $color="#292929"
          onClick={handleProducts}
          data-btn={"editar"}
          data-id={id}
        >
          Editar
        </Btn>
        <Btn
          $background="#f83838"
          $color="white"
          onClick={handleProducts}
          data-btn={"eliminar"}
          data-id={id}
        >
          Eliminar
        </Btn>
      </td>
    </Row>
  );
};

export default Product;
