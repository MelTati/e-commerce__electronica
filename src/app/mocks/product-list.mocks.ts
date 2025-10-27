import { Department } from '../interfaces/department.interface';
import { Ecosystem } from '../interfaces/ecosystem.interface';
import { ProductListItem } from '../interfaces/product.list.interface';

export const MOCK_DEPARTMENTS: Department[] = [
    {id: 1, label: 'Audio', imageUrl: 'assets/img/Audio.png'},
    {id: 2, label: 'Comunicación', imageUrl: 'assets/img/comunicacion.png'},
    {id: 3, label: 'Cómputo', imageUrl: 'assets/img/computadora.png'},
    {id: 4, label: 'Electrónica', imageUrl: 'assets/img/electronica.png'},
]


export const MOCK_ECOSYSTEMS: Ecosystem[] = [
    {id: 1, altText: 'SILIMEX', imageUrl: 'assets/img/SILIMEX.jpg'},
    {id: 2, altText: 'NVIDIA', imageUrl: 'assets/img/NVIDIA.webp'},
    {id: 3, altText: 'Raspberry', imageUrl: 'assets/img/RASPBERRY.webp'},
    {id: 4, altText: 'Arduino', imageUrl: 'assets/img/ARDUINO.webp'},
    {id: 5, altText: 'SeedStudio', imageUrl: 'assets/img/seedstudio.webp'},
    {id: 6, altText: 'Unite Electronics', imageUrl: 'assets/img/unitelectronics.webp'},
]

export const MOCK_PRODUCT_LIST_ITEMS: ProductListItem[] = [
    {id: 1, label: 'SuperKit', imageUrl: 'assets/img/superkit.jpg', price: '$699.00'},
    {id: 2, label: 'NVIDIA', imageUrl: 'assets/img/NVIDIA.webp', price: '$699.00'},
    {id: 3, label: 'Raspberry', imageUrl: 'assets/img/RASPBERRY.webp', price: '$699.00'},
    {id: 4, label: 'Arduino', imageUrl: 'assets/img/ARDUINO.webp', price: '$699.00'},
    {id: 5, label: 'SeedStudio', imageUrl: 'assets/img/seedstudio.webp', price: '$699.00'},
    {id: 6, label: 'Unite Electronics', imageUrl: 'assets/img/unitelectronics.webp', price: '$699.00'},
]
