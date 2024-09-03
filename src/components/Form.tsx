import { handleSubmit } from "../utils/";
import { FC, LegacyRef, MutableRefObject, RefObject } from "react";

interface Props {
  isUpdate: boolean;
  inputName: LegacyRef<HTMLInputElement>;
  inputPrice: LegacyRef<HTMLInputElement>;
}

const Form: FC<Props> = ({ isUpdate, inputName, inputPrice,  })=> {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre" name="nombre" ref={inputName} />
      <input type="text" placeholder="Precio" name="precio" ref={inputPrice} />
      <input type="submit" value={`${isUpdate ? "Actualizar" : "Agregar"}  `} />
    </form>
  );
};

export default Form
