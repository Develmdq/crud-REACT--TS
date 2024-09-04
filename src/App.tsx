import { useState } from "react";
import { Container, Title, Divider } from "./style/StyledComponents";
import ProductsProvider from "./context/ProductsContext";

import { Form, TableProducts } from "./components";

const App = () => {
 
  const [id, setId] = useState();
  

  return (
    <ProductsProvider>
      <Container>
        <Title>Manejo de Productos React + Typescript</Title>
        <Divider />
        <Form />
        <TableProducts />
      </Container>
    </ProductsProvider>
  );
};

export default App;
