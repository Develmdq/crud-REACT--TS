import { Row, Btn } from "../style/StyledComponents";
import { Producto } from "../interfaces/interfaces";

const Product: React.FC<Producto> = ({ nombre, precio }) => {
  return (
    <Row>
      <td>{nombre}</td>
      <td>{precio}</td>
      <td>
        <Btn>Editar</Btn>
        <Btn>Borrar</Btn>
      </td>
    </Row>
  );
};

export default Product;
