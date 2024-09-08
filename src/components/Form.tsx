import { useState, useContext, FormEventHandler } from "react";
import { FormProducts, InputProducts } from "../style/StyledComponents";
import { ProductsContext } from "../context/ProductsContext";
import { DataContextType, Producto } from "../interfaces/interfaces";
import { alertApp } from "../utils";
import useFetch from "../hooks/useFetch";

const Form = () => {
  // const [newProduct, setNewPorduct]= useState()
  const {
    productos,
    inputName,
    inputPrice,
    isUpdate,
    setIsUpdate,
    setProductos,
    id,
  } = useContext(ProductsContext) as DataContextType;
 
  

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nombre = formData!.get("nombre") as string;
    const precio = formData!.get("precio") as string;

      
        
    

    if (nombre !== "" && precio !== "") {
      if (!isUpdate) {
        // const newProduct = {
        //   id: productos!.length + 1,
        //   nombre: nombre,
        //   precio: precio,
        // };
        // setProductos([...productos, newProduct]);
        // setNewPorduct(newProduct)
        alertApp("agregado", undefined);
        // Array.from(new Set(foo));
        e.currentTarget.reset();
        setIsUpdate(false);
      } else {
        const updateProduct = productos?.map((product) =>
          product.id == id
            ? { id: id, nombre: nombre, precio: precio }
            : product
        );
        setProductos(updateProduct);
        setIsUpdate(false);
        e.currentTarget.reset();
      }
    } else {
      alertApp("submit", undefined);
    }
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
