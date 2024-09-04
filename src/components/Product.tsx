import { Row, Btn } from "../style/StyledComponents";
import { Producto } from "../interfaces/interfaces";

const Product: React.FC<Producto> = ({ nombre, precio }) => {
  return (
    <Row $background="#a0a0a0">
      <td>{nombre}</td>
      <td>$ {precio}</td>
      <td>
        <Btn $background="#abfcb8">Editar</Btn>
        <Btn $background="#ff8888">Borrar</Btn>
      </td>
    </Row>
  );
};

export default Product;
