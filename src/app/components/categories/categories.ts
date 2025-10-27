import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Department } from '../../interfaces/department.interface';
import { Ecosystem } from '../../interfaces/ecosystem.interface';
import { ProductListItem } from '../../interfaces/product.list.interface';
import { ProductListService } from '../../services/product-list.service';
import {ProductListComponent } from '../product-list/product-list';
//El observable es necesario para manejar datos asíncronos lo cual es común en Angular para servicios que obtienen datos de APIs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone : true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule,NgOptimizedImage,ProductListComponent],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})

export class CategoriesComponent implements OnInit {

  // Observables para cada sección
  // Las exclamaciones "!" indican que se inicializarán en ngOnInit (práctica común con Observables)
  departments$!: Observable<Department[]>;
  ecosystems$!: Observable<Ecosystem[]>;
  products$!: Observable<ProductListItem[]>;

  // Inyectamos el servicio
  constructor(private categoriesService: ProductListService) { }

  ngOnInit(): void {
    // Los datos se cargan de forma asíncrona
    this.departments$ = this.categoriesService.getDepartments();
    this.ecosystems$ = this.categoriesService.getEcosystems();
    this.products$ = this.categoriesService.getProductsList();
  }

  addToCart(product: ProductListItem): void {
    console.log(`Añadiendo ${product.label} (ID: ${product.id}) al carrito.`);
  }

  /**
   * Genera el enlace de detalle del producto.
   */

  getProductDetailLink(id: number): string {
    return `/product-detail/${id}`;
  }
}
