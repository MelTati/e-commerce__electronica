export interface Product {
  id: number;
  title: string;
  price: number;
  imgURL: string;
  imgCarrusel: string[];
  availability: 'Hay existencias' | 'Agotado';
  details: {
    [key: string]: any;
  };
}
