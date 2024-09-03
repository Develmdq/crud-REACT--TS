import { Table, Row } from "../style/StyledComponents";
import Products from "./Products";

const TableProducts = () => {
  return (
    <Table>
      <thead>
        <Row>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </Row>
      </thead>
      <tbody>
        <Products />
      </tbody>
    </Table>
  );
};

export default TableProducts
