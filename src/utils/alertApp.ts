import Swal from "sweetalert2";

const alertApp = async (action: string, nombre?: string,deleteProduct?: any): Promise<any> => {
  if (action === "eliminar") {
    Swal.fire({
      title: `Se eliminará el producto: ${nombre}`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      confirmButtonColor: "#f83838",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct();
        Swal.fire({
          title: "Eliminado!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  if (action === "agregar") {
    Swal.fire({
      title: "Producto agregado correctamente",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  }
  if (action === "exist") {
    Swal.fire({
      title: "El producto ya existe",
      icon: "error",
      timer: 1500,
      showConfirmButton: false,
    });
  }

  if (action === "actualizar") {
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
