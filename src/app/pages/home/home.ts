import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef, ChangeDetectorRef } from '@angular/core';
import {CategoriesComponent} from '../../components/categories/categories';
// Home es la pagina principal que muestra un carrusel de imagenes.
// Permite navegar entre las imagenes usando botones y puntos indicadores.
// Usa ViewChildren para acceder a los elementos del DOM despues de que la vista ha sido inicializada.
// Usa el ciclo de vida AfterViewInit para inicializar el carrusel despues de que la vista esta lista.
// Usa QueryList para manejar listas de elementos del DOM.
// Usa ElementRef para manipular directamente los elementos del DOM.

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [CategoriesComponent],
  styleUrls: ['./home.css']
})
export class Home implements AfterViewInit {
  // Indice de la diapositiva actual
  slideIndex = 0;

  // Referencias a los elementos del DOM para las diapositivas y los puntos
  @ViewChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChildren('dot') dots!: QueryList<ElementRef>;

  constructor(private cd: ChangeDetectorRef) {}

  // Metodo del ciclo de vida que se ejecuta despues de que la vista ha sido inicializada
  ngAfterViewInit() {
    // Espera a que QueryLists tengan elementos
    if (this.slides && this.dots) {
      this.showSlides(this.slideIndex);
      this.cd.detectChanges(); // asegura que Angular detecte los cambios de estilos
    }
  }

  // Metodo para avanzar o retroceder en las diapositivas
  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  // Metodo para ir a una diapositiva especifica
  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  // Metodo para mostrar la diapositiva actual y actualizar los puntos indicadores
  showSlides(n: number) {
    // Convertir QueryLists a arrays para facilitar el acceso
    const slidesArr = this.slides?.toArray() || [];
    const dotsArr = this.dots?.toArray() || [];

    // Verificar si hay diapositivas o puntos
    if (!slidesArr.length || !dotsArr.length) return;

    // Ajustar el indice de la diapositiva si es necesario
    if (n >= slidesArr.length) this.slideIndex = 0;
    if (n < 0) this.slideIndex = slidesArr.length - 1;

    // Ocultar todas las diapositivas y desactivar todos los puntos
    // Usar forEach para iterar sobre los arrays y actualizar estilos y clases, asi se muestra solo la diapositiva actual y se activa el punto correspondiente
    slidesArr.forEach(slide => slide.nativeElement.style.display = 'none');
    dotsArr.forEach(dot => dot.nativeElement.classList.remove('active'));

    // Mostrar la diapositiva actual y activar el punto correspondiente
    slidesArr[this.slideIndex].nativeElement.style.display = 'block';
    // Agregar la clase 'active' al punto correspondiente
    dotsArr[this.slideIndex].nativeElement.classList.add('active');
  }
}
