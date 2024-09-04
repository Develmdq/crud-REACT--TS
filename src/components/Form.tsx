import { useState, useRef } from "react";
import { handleSubmit } from "../utils/";
import { FormProducts, InputProducts } from "../style/StyledComponents";

const Form = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const inputName = useRef(null);
  const inputPrice = useRef(null);

  return (
    <FormProducts onSubmit={(e) => handleSubmit(e, isUpdate, setIsUpdate)}>
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
