import { ReactNode } from 'react';


export type ProductList = Producto[]

export interface Producto {
  id?: number;
  nombre: string;
  precio: string;
}

export interface PropsProductos {
  productos: ProductList | undefined;
}

export interface PropsChildren {
  // children: ReactNode; // Será cualquier tipo de elemento hasta los no renderizables. Ojo Mejor usar: 
  // children: StrictReactNode; // Como el anterior pero solo permite elementos renderizables.
  children: JSX.Element | JSX.Element[]; // Será un elemento JSX o varios
}

export interface DataContextType {
  productos: ProductList | undefined;
  isLoading: boolean
}
