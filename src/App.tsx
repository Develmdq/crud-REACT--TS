import { Container, Title, Divider } from "./style/StyledComponents";
import {ProductsProvider} from "./context/";
import { Form, TableProducts } from "./components";

const App = () => {
  // console.log('app')
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
