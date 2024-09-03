import Swal from "sweetalert2";

export const handleProducts = (e, nombre, precio) => {
  if (e.target.value === "editar") {
    inputName.current.focus();
    inputName.current.value = nombre;
    inputPrice.current.value = precio;
    setId(e.target.id);
    setIsUpdate(true);
  } else {
    Swal.fire({
      title: `Se va a eliminar el producto: ${nombre}`,
      showCancelButton: true,
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "", "success");
        const deleteProduct = products.filter(
          (product) => product.id != e.target.id
        );
        setProducts(deleteProduct);
      }
    });
  }
};


