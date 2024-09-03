

export const handleSubmit = (e) => {
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const nombre = dataForm.get("nombre");
    const precio = dataForm.get("precio");

    if (nombre !== "" || precio !== "") {
      if (!isUpdate) {
        const newProduct = {
          id: products.length + 1,
          nombre: nombre,
          precio: precio,
        };
        setProducts([...products, newProduct]);
        e.target.reset();
      } else {
        const updateProduct = products.map((product) =>
          product.id == id
            ? { id: id, nombre: nombre, precio: precio }
            : product
        );
        setIsUpdate(false);
        setProducts(updateProduct);
      }
      e.target.reset();
    } else {
      alert("No pueden quedar campos vacíos !!");
    }
  };
