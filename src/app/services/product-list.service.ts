// src/app/services/product-list.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductListItem } from '../interfaces/product.list.interface';
import { Department } from '../interfaces/department.interface';
import { Ecosystem } from '../interfaces/ecosystem.interface';
import { MOCK_PRODUCT_LIST_ITEMS, MOCK_DEPARTMENTS, MOCK_ECOSYSTEMS } from '../mocks/product-list.mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  constructor() { }

  getDepartments(): Observable<Department[]> {
    return of(MOCK_DEPARTMENTS);
  }

  getEcosystems(): Observable<Ecosystem[]> {
    return of(MOCK_ECOSYSTEMS);
  }

  getProductsList(): Observable<ProductListItem[]> {
    return of(MOCK_PRODUCT_LIST_ITEMS);
  }

  addToCart(product: ProductListItem): Observable<boolean> {
    console.log(`[ListService] Producto añadido al carrito: ${product.label}`);
    return of(true);
  }
}
