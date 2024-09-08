import { useState, useEffect, useContext, FC, MouseEvent } from "react";
import { Row, Btn } from "../style/StyledComponents";
import { DataContextType, Producto } from "../interfaces/interfaces";
import { ProductsContext } from "../context/ProductsContext";
import { alertApp } from "../utils";

const Product: FC<Producto> = ({ id, nombre, precio }) => {
  const [confirm, setConfirm] = useState(true)
  const {
    inputName,
    inputPrice,
    productos,
    setProductos,    
    setIsUpdate,
    setId
  } = useContext(ProductsContext) as DataContextType;  
 
  useEffect(()=>{!confirm && setProductos(productos?.filter((producto) => producto.id !== id));},[confirm])
 
  const handleProducts = (e: MouseEvent<HTMLButtonElement>) => {
    const action = e.currentTarget.dataset.btn as string;

    if (action === "editar") {
      inputName.current.focus();
      inputName.current.value = nombre;
      inputPrice.current.value = precio;
      setIsUpdate(true);
      setId(id)
    } else {
      alertApp(action,{ nombre, setConfirm}); 
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
        <Btn $background="#ff8888" onClick={handleProducts} data-btn={"eliminar"}>
          Borrar
        </Btn>
      </td>
    </Row>
  );
};

export default Product;
