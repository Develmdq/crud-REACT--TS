import { FC, LegacyRef } from "react";
import { handleSubmit } from "../utils/";
import { FormProducts, InputProducts } from "../style/StyledComponents";

interface Props {
  isUpdate: boolean;
  inputName: LegacyRef<HTMLInputElement>;
  inputPrice: LegacyRef<HTMLInputElement>;
}

const Form: FC<Props> = ({ isUpdate, inputName, inputPrice }) => {
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
        value={`${isUpdate ? "Actualizar" : "Agregar"}  `}
      />
    </FormProducts>
  );
};

export default Form;
