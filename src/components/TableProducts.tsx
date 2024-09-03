import { Table } from "../style/StyledComponents";
import Products from "./Products";

const TableProducts = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <Products />
      </tbody>
    </Table>
  );
};

export default TableProducts
