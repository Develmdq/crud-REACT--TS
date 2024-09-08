import { Container, Title, Divider } from "./style/StyledComponents";
import ProductsProvider from "./context/ProductsContext";
import { Form, TableProducts } from "./components";
import ProductApp from "./ProductApp";


const App = () => {  

  return (
    <ProductsProvider>
      {/* <Container>
        <Title>Manejo de Productos React + Typescript</Title>
        <Divider />
        <Form />
        <TableProducts />
      </Container> */}
      <ProductApp/>
    </ProductsProvider>
  );
};

export default App;
