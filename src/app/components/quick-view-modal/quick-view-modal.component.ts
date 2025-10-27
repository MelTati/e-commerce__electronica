import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product-detail.interface';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-quick-view-modal',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './quick-view-modal.component.html',
  styleUrls: ['./quick-view-modal.component.css']
})

export class QuickViewModalComponent implements OnChanges {

  @Input() product: Product | null = null;
  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();

  showFullDetails: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.showFullDetails = false;
    }
  }

  closeModal(): void {
    this.close.emit();
  }

  toggleDetails(): void {
    this.showFullDetails = !this.showFullDetails;
  }

  getDetailKeys(details: any): string[] {
    return Object.keys(details || {});
  }
}
