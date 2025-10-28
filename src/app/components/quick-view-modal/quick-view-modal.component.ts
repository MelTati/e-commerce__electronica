import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product-detail.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quick-view-modal',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './quick-view-modal.component.html',
  styleUrls: ['./quick-view-modal.component.css']
})

export class QuickViewModalComponent implements OnChanges {
  @Input() product: Product | null = null;
  @Input() isVisible = false;
  @Output() close = new EventEmitter<void>();

  showFullDetails = false;
  detailKeys: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product?.details) {
      this.detailKeys = Object.keys(this.product.details);
      this.showFullDetails = false;
    } else {
      this.detailKeys = [];
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  toggleDetails(): void {
    this.showFullDetails = !this.showFullDetails;
  }

  getProductDetailLink(id: number): string {
    return `/product/${id}`;
  }
}