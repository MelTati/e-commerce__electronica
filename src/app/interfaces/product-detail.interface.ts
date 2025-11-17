export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  cantidad: number;
  imgURL: string;
  imgCarrusel: string[];
  details: {
    [key: string]: any;
  };
}
