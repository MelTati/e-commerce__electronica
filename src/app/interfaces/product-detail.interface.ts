export interface Product {
  id: number;
  title: string;
  price: number;
  imgURL: string;
  currency: 'MXN' | 'USD';
  availability: 'Hay existencias' | 'Agotado';
  details: {
    [key: string]: any;
  };
}
