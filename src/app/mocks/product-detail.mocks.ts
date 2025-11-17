import { Product } from '../interfaces/product-detail.interface';

export const MOCK_PRODUCTS_DETAILS: Product[] = [
  // ID 1: Cable Dupont
  {
    id: 1,
    title: '10 cm Cable Dupont Hembra-Hembra 40 pines',
    price: 20.00,
    stock: 150,
    imgURL: 'assets/img/superkit.jpg',
    imgCarrusel: [
      'assets/img/superkit.jpg',
      'assets/img/superkit.jpg',
      'assets/img/superkit.jpg',
    ],
    cantidad: 1,
    details: {
      'Calibre del cable': '26 AWG',
      'Capacidad de corriente': '0.36 A',
      'Longitud': '10 cm',
      'Tipo de conector': 'Hembra – Hembra',
      'Cantidad de pines': 40,
    }
  },
  // ID 2: Terminal de Palanca
  {
    id: 2,
    title: 'Terminal Unión Rápida de Palanca (2 Vías)',
    price: 35.00,
    stock: 80,
    imgURL: 'assets/img/NVIDIA.webp' ,
    imgCarrusel: [
      'assets/img/NVIDIA.webp',
      'assets/img/NVIDIA.webp',
      'assets/img/NVIDIA.webp',
    ],
    cantidad: 1,
    details: {
      'Tensión Nominal': '400 V',
      'Corriente Nominal': '32 A',
      'Rango de Calibre': '28 – 12 AWG',
      'Polos / Vías': 2,
      'Material': 'Nylon PA66 / Cobre',
      'Certificaciones': 'UL, CSA (Simulado)',
      'Temperatura Máxima': '85 °C',
    },
  },
];
