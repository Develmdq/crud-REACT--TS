import { ReactNode, MutableRefObject } from "react";

export type ProductList = Producto[];

export interface Producto {
  id: number;
  nombre: string;
  precio: string;
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
  productos: ProductList;
  isLoading: boolean;
  isUpdate: boolean;
  inputName: MutableRefObject<HTMLInputElement>;
  inputPrice: MutableRefObject<HTMLInputElement>;
  id: number;
  setId(id: number): void;
  setIsUpdate(isUpdate: boolean): void;
  setProductos(productos: ProductList): void;
}

export interface AlertProps {
  nombre?: string;
  setConfirm?(confirm: boolean): void;
}

export type NewProducto = Producto | undefined;

export interface Method {
  [get: string]: string;
  post: string;
  patch: string;
  delete: string;
}
