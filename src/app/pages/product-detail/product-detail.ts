import { Component, OnInit, HostListener, ElementRef, ViewChild } from '@angular/core';
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
  isLoading = true;
  selectedImage: string | null = null;
  selectedIndex = 0;
  showLightbox = false;

  cantidad: number = 1;

  @ViewChild('lens') zoomLens!: ElementRef<HTMLDivElement>;
  @ViewChild('result') zoomResult!: ElementRef<HTMLDivElement>;
  @ViewChild('mainImage') mainImage!: ElementRef<HTMLImageElement>;

  private touchStartX = 0;

  constructor(
    private detailService: ProductDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          const idString = params.get('id');
          this.productId = idString ? +idString : null;

          this.isLoading = true;
          this.product = null;

          return (this.productId !== null && !isNaN(this.productId))
            ? this.detailService.getProductDetailsById(this.productId)
            : of(null);
        })
      )
      .subscribe({
        next: (data) => {
          this.product = data;
          this.isLoading = false;

          if (this.product) {
            this.selectedIndex = 0;

            this.selectedImage =
              this.product.imgCarrusel?.length
                ? this.product.imgCarrusel[0]
                : this.product.imgURL || null;

            // Reinicia la cantidad si el producto cambia
            this.cantidad = 1;
          }
        },
        error: () => {
          this.isLoading = false;
          this.product = null;
        }
      });
  }

  incrementCantidad() {
    if (!this.product) return;
    if (this.cantidad < this.product.stock) {
      this.cantidad++;
    }
  }

  decrementCantidad() {
    if (this.cantidad > 1) {
      this.cantidad--;
    }
  }

  getDetailKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  addToCart(): void {
    if (!this.product) return;

    this.detailService.addToCart({
      ...this.product,
      cantidad: this.cantidad
    }).subscribe();
  }

  setMainImage(index: number): void {
    if (!this.product) return;
    this.selectedIndex = index;
    this.selectedImage = this.product.imgCarrusel[index];
  }

  prevImage(): void {
    if (!this.product) return;

    this.selectedIndex =
      this.selectedIndex > 0
        ? this.selectedIndex - 1
        : this.product.imgCarrusel.length - 1;

    this.selectedImage = this.product.imgCarrusel[this.selectedIndex];
  }

  nextImage(): void {
    if (!this.product) return;

    this.selectedIndex =
      this.selectedIndex < this.product.imgCarrusel.length - 1
        ? this.selectedIndex + 1
        : 0;

    this.selectedImage = this.product.imgCarrusel[this.selectedIndex];
  }

  moveLens(event: MouseEvent) {
    if (window.innerWidth < 768) return;

    const img = this.mainImage.nativeElement;
    const lens = this.zoomLens.nativeElement;
    const result = this.zoomResult.nativeElement;

    const rect = img.getBoundingClientRect();

    const x = event.pageX - rect.left - window.scrollX - lens.offsetWidth / 2;
    const y = event.pageY - rect.top - window.scrollY - lens.offsetHeight / 2;

    const maxX = rect.width - lens.offsetWidth;
    const maxY = rect.height - lens.offsetHeight;

    const lensX = Math.max(0, Math.min(x, maxX));
    const lensY = Math.max(0, Math.min(y, maxY));

    lens.style.left = `${lensX}px`;
    lens.style.top = `${lensY}px`;

    const cx = result.offsetWidth / lens.offsetWidth;
    const cy = result.offsetHeight / lens.offsetHeight;

    result.style.opacity = '1';
    lens.style.opacity = '1';

    result.style.backgroundImage = `url('${this.selectedImage}')`;
    result.style.backgroundPosition = `-${lensX * cx}px -${lensY * cy}px`;
    result.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
  }

  createLens() {
    if (!this.zoomLens || !this.zoomResult) return;
    this.zoomLens.nativeElement.style.opacity = '1';
    this.zoomResult.nativeElement.style.opacity = '1';
  }

  removeLens() {
    if (!this.zoomLens || !this.zoomResult) return;
    this.zoomLens.nativeElement.style.opacity = '0';
    this.zoomResult.nativeElement.style.opacity = '0';
  }

  /** TOUCH Swipe */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].screenX;

    if (this.touchStartX - endX > 50) this.nextImage();
    if (endX - this.touchStartX > 50) this.prevImage();
  }

  openLightbox() {
    this.showLightbox = true;
  }

  closeLightbox() {
    this.showLightbox = false;
  }
}
