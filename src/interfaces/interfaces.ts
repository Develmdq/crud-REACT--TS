import { ReactNode, MutableRefObject } from "react";

export type ProductList = Producto[];

export interface Producto {
  id?: number;
  nombre: string;
  precio: string ;
}

export interface PropsProductos {
  productos: ProductList;
}

export interface PropsChildren {
  // children: JSX.Element | JSX.Element[];
  children: ReactNode;
}

export interface DataContextType {
  children: JSX.Element | JSX.Element[];
  products: ProductList;
  isLoading: boolean;
  isUpdate: boolean;
  inputName: MutableRefObject<HTMLInputElement>;
  id: number;
  setId(id: string| undefined): void;
  setIsUpdate(isUpdate: boolean): void;
  setProductos(productos: ProductList): void;
  addProduct(formData: FormData): void; //:TODO
  productsDispatch({}): React.DispatchWithoutAction;
  dataForm: Producto;
  setDataForm(dataForm:Producto): void;
}

export interface ProductAction {
  type: string;
  payload: number | Producto;
  products:ProductList
}
