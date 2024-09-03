import { useState, useRef } from "react";
import { Container, Title, Divider } from "./style/StyledComponents";

import { Form, TableProducts } from "./components";

const App = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [id, setId] = useState();
  let inputName = useRef(null);
  const inputPrice = useRef(null);
  

  return (
    <Container>
      <Title>Manejo de Productos React + Typescript</Title>
      <Divider />
      <Form isUpdate={isUpdate} inputName={inputName} inputPrice={inputPrice} />
      <TableProducts />
    </Container>
  );
};

export default App;
