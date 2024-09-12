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


// async function deletePost(id) {
//   try {
//     const response = await fetch(`http://localhost:3000/posts/${id}`, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     });
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }
