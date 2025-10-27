import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductDetailService } from '../../services/product-detail.service';
import { Product } from '../../interfaces/product-detail.interface';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})

export default class ProductDetail implements OnInit {

  productId: number | null = null;
  product: Product | null = null;
  isLoading: boolean = true;
  showFullDetails: boolean = false;

  constructor(
    private detailService: ProductDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const idString = params.get('id');
        this.productId = idString ? +idString : null;
        this.isLoading = true;
        this.product = null;
        if (this.productId) {
          return this.detailService.getProductDetailsById(this.productId);
        } else {
          return of(null as unknown as Product);
        }
      })
    ).subscribe({
      next: (data) => {
        this.product = data;
        this.isLoading = false;
        this.showFullDetails = false;
      },
      error: (err) => {
        console.error('Error al cargar producto:', err);
        this.isLoading = false;
        this.product = null;
      }
    });
  }

  toggleDetails(): void {
    this.showFullDetails = !this.showFullDetails;
  }

  getDetailKeys(details: any): string[] {
    return Object.keys(details || {});
  }

  handleAddToCart(): void {
    if (!this.product) return;
    this.detailService.addToCart(this.product).subscribe({
      next: () => {
        console.log(`¡${this.product!.title} añadido al carrito!`);
      }
    });
  }
}
