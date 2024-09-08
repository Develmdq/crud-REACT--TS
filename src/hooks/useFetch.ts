import { useState, useEffect } from "react";
import { ProductList, Producto, Method } from "../interfaces/interfaces";

const URL_BASE: string = "http://localhost:3000/productos";

const useFetch = (method: string, formData?: FormData) => {
  const [productos, setProductos] = useState<ProductList>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (method === "get") {
      fetch(URL_BASE)
        .then((resp) => resp.json())
        .then((data) => {
          setProductos(data);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
    // fetch(URL_BASE, {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {setProductos(data)})
    //   .catch((error) => console.log(error))
    //   .finally(() => setIsLoading(false));
  }, [method]);
  return { productos, isLoading, setProductos };
};

export default useFetch;
