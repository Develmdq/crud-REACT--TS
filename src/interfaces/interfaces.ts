import { ReactNode, MutableRefObject } from "react";

export type ProductList = Producto[];

export interface Producto {
  id?: number;
  nombre: string;
  precio: string;
}

export interface PropsProductos {
  productos: ProductList | undefined;
}

export interface PropsChildren {
  // children: JSX.Element | JSX.Element[];
  children: ReactNode;
}

export interface DataContextType {
  children: JSX.Element | JSX.Element[];
  productos: ProductList | undefined;
  isLoading: boolean;
  isUpdate: boolean;
  inputName: MutableRefObject<HTMLInputElement>;
  inputPrice: MutableRefObject<HTMLInputElement>;
  id: number;
  setId(): void;
  setIsUpdate(): void;
  setProductos(): void;  
}
