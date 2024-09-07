import { useContext, FormEvent } from "react";
import { FormProducts, InputProducts } from "../style/StyledComponents";
import { ProductsContext } from "../context/ProductsContext";
import { DataContextType } from "../interfaces/interfaces";

const Form = () => {
  const { inputName, inputPrice,isUpdate } = useContext(ProductsContext ) as DataContextType;

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // const {  isUpdate, setIsUpdate, productos } = useContext(
  //   ProductsContext
  // ) as DataContextType
  // const dataForm = new FormData();
  // const nombre = dataForm!.get("nombre");
  // const precio = dataForm!.get("precio");
  // if (nombre !== "" || precio !== "") {
  //   if (!isUpdate) {
  //     const newProduct = {
  //       id: productos!.length + 1,
  //       nombre: nombre,
  //       precio: precio,
  //     };
  //   } else {
  //     const updateProduct = productos?.map((product) =>
  //       product.id == id ? { id: id, nombre: nombre, precio: precio } : product
  //     );
  // setIsUpdate(false);
  //   }
  // } else {
  //   // alertApp("submit");
  // }
};


   return (
    <FormProducts onSubmit={handleSubmit}>
      <InputProducts
        type="text"
        placeholder="Nombre"
        name="nombre"
        ref={inputName}
      />
      <InputProducts
        type="text"
        placeholder="Precio"
        name="precio"
        ref={inputPrice}
      />
      <InputProducts
        type="submit"
        value={`${isUpdate ? "Actualizar" : "Agregar"}`}
      />
    </FormProducts>
  );
};

export default Form;
