import Swal from "sweetalert2";
import { AlertProps } from "../interfaces/interfaces";

const alertApp = (action:string , { nombre, setConfirm }: AlertProps = {}) => {
  if (action === "eliminar") {
    Swal.fire({
      title: `Se eliminará el producto: ${nombre}`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        setConfirm!(false);
        Swal.fire({
          title: "Eliminado!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  } 

  if (action === "agregado") {
    Swal.fire({
      title: "Producto agregado correctamente",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  }

  if (action === "update") {
    Swal.fire({
      title: "Producto actualizado",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  }

  if (action === "submit") {
    Swal.fire({
      title: "No pueden quedar campos vacíos",
      icon: "error",
      showConfirmButton: true,
      confirmButtonText: "Ok",
    });
  }
};

export default alertApp;
