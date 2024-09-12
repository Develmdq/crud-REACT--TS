import { useContext, FormEventHandler, FC } from "react";
import { FormProducts, InputProducts } from "../style/StyledComponents";
import { ProductsContext, productsAction } from "../context";
import { DataContextType } from "../interfaces/interfaces";
import { alertApp } from "../utils";
import fetchProducts from "../fetching/fetchProducts";

const Form: FC = () => {
  const {
    id,
    products,
    isUpdate,
    inputName,
    dataForm,
    setDataForm,
    setIsUpdate,
    productsDispatch,
  } = useContext(ProductsContext) as DataContextType;

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const productName = products.map((product) => product.nombre);
    if (!isUpdate && productName.includes(dataForm.nombre)) {
      alertApp("exist");
    } else {
      if (dataForm.nombre === "" || dataForm.precio === "") {
        alertApp("submit");
      } else {
        const response = await fetchProducts(
          isUpdate ? `productos/${id}` : "productos",
          isUpdate ? "PUT" : "POST",
          dataForm
        );

        productsDispatch({
          type: isUpdate
            ? productsAction.FETCH_PRODUCT_UPDATE
            : productsAction.FETCH_PRODUCT_CREATE,
          payload: response,
        });
        alertApp(isUpdate ? "actualizar" : "agregar");
        setIsUpdate(false);
      }
    }

    setDataForm({ nombre: "", precio: "" });
  };

  const handleDataForm = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDataForm({ ...dataForm, [e.target.name.toLowerCase()]: e.target.value });

  // console.log('form')
  return (
    <FormProducts onSubmit={handleSubmit}>
      <InputProducts
        type="text"
        placeholder="Nombre"
        name="nombre"
        ref={inputName}
        value={dataForm.nombre}
        onChange={(e) => handleDataForm(e)}
      />
      <InputProducts
        type="number"
        placeholder="Precio"
        name="precio"
        value={dataForm.precio}
        onChange={(e) => handleDataForm(e)}
      />
      <InputProducts
        type="submit"
        value={`${isUpdate ? "Actualizar" : "Agregar"}`}
      />
    </FormProducts>
  );
};

export default Form;
