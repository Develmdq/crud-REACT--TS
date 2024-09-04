import { Table, Row, Thead, Tbody } from "../style/StyledComponents";
import Products from "./Products";

const TableProducts = () => {
  return (
    <Table>
      <Thead>
        <Row $background='back'>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </Row>
      </Thead>
      <Tbody>
        <Products />
      </Tbody>
    </Table>
  );
};

export default TableProducts
