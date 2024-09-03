import { useState, useRef } from "react";
import { Container, Title } from "./style/StyledComponents";
import useFetch from "./hooks/useFetch";
import { Products, Form } from "./components";

const App = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  // const [id, setId] = useState();
  let inputName = useRef<HTMLInputElement >(null);
  const inputPrice = useRef (null); ;
  const { productos, isLoading } = useFetch("http://localhost:3000/productos");
 
  
  return (
    <Container>
      <Title>Manejo de Productos</Title>
      <Form isUpdate={isUpdate} inputName={inputName} inputPrice={inputPrice} />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <Products productos={productos} />
        </tbody>
      </table>
    </Container>
  );
};

export default App;
