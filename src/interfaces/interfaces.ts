export type ProductList =  Producto[]



export interface Producto {
  id?: number;
  nombre: string;
  precio: string;
}

export interface PropsProductos {
  productos: ProductList | undefined;
}
