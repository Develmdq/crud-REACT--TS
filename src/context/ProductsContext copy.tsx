// import { FC, createContext, useState } from "react";
// import { DataContextType } from "../interfaces/interfaces";
// import { handleProducts, handleSubmit } from "../utils";
// import useFetch from "../hooks/useFetch";

// export const ProductsContext = createContext<DataContextType>({} as DataContextType);


// const ProductsProvider: FC<DataContextType> = ({ children }) => {
//   // const [id, setId] = useState();
//   const [isUpdate, setIsUpdate] = useState(false);
//   const { isLoading, productos } = useFetch("http://localhost:3000/productos");

//   return (
//     <ProductsContext.Provider
//       value={{
//         productos,
//         isLoading,
//         isUpdate,
//         setIsUpdate,
//         handleProducts,
//         handleSubmit,
//       }}
//     >
//       {children}
//     </ProductsContext.Provider>
//   );
// };

// export default ProductsProvider;
