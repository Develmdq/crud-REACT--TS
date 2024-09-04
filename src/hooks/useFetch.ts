import { useState, useEffect } from "react";
import { ProductList } from "../interfaces/interfaces";

const useFetch = (url: string) => {
  const [productos, setProductos] = useState<ProductList>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setProductos(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { productos, isLoading, setProductos };
};

export default useFetch;
