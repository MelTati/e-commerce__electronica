import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../interfaces/product-detail.interface';
import { MOCK_PRODUCTS_DETAILS } from '../mocks/product-detail.mocks';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailService {
  constructor() { }

  /**
   * Obtiene los detalles de un producto específico por ID.
   */

  getProductDetailsById(id: number): Observable<Product> {
    const product = MOCK_PRODUCTS_DETAILS.find(p => p.id === id);

    if (product) {
      // Simula el retraso de la red y retorna el producto encontrado
      return of(product);
    } else {
      // Retorna un error si no se encuentra el producto
      return throwError(() => new Error(`Producto con ID ${id} no encontrado.`));
    }
  }

  /**
   * Simula la adición del producto al carrito.
   */
  addToCart(product: Product): Observable<boolean> {
    console.log(`Producto añadido al carrito: ${product.title}`);
    return of(true);
  }
}
