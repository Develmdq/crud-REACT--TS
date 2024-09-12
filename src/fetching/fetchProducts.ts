import { Producto } from "../interfaces/interfaces";
const URL_BASE: string = "http://localhost:3000/";

const fetchProducts = async (
  path: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Producto | string
) => {
  const response = await fetch(`${URL_BASE}${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default fetchProducts;



