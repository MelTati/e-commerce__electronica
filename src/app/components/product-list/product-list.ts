// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { ProductListService } from '../../services/product-list.service';
import { ProductDetailService } from '../../services/product-detail.service';
import { ProductListItem } from '../../interfaces/product.list.interface';
import { Department } from '../../interfaces/department.interface';
import { Ecosystem } from '../../interfaces/ecosystem.interface';
import { Product } from '../../interfaces/product-detail.interface';
import { QuickViewModalComponent} from '../quick-view-modal/quick-view-modal.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [QuickViewModalComponent,CommonModule, MatGridListModule, MatCardModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})

export class ProductListComponent implements OnInit {

  departments$: Observable<Department[]>;
  ecosystems$: Observable<Ecosystem[]>;
  products$!: Observable<ProductListItem[]>;

  isQuickViewVisible: boolean = false;
  selectedProduct: Product | null = null;

  constructor(
    private listService: ProductListService,
    private detailService: ProductDetailService // Necesario para la Vista Rápida
  ) {
    this.departments$ = this.listService.getDepartments();
    this.ecosystems$ = this.listService.getEcosystems();
  }

  ngOnInit(): void {
    this.products$ = this.listService.getProductsList();
  }

  openQuickView(id: number): void {
    this.isQuickViewVisible = false;
    this.selectedProduct = null;

    this.detailService.getProductDetailsById(id).subscribe({
      next: (productDetail) => {
        this.selectedProduct = productDetail;
        this.isQuickViewVisible = true;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  closeQuickView(): void {
    this.isQuickViewVisible = false;
    this.selectedProduct = null;
  }

  addToCart(product: ProductListItem): void {
    this.listService.addToCart(product).subscribe();
  }
}
