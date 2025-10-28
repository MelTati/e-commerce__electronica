import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Descomenta si usas *ngIf, *ngFor, etc.

@Component({
  selector: 'app-footer',
  standalone: true, // <-- Asegúrate que esté en true
  imports: [/* CommonModule */], // <-- Añade CommonModule aquí si lo necesitas
  templateUrl: './footer.html',
  styleUrl: './footer.css', // <-- Asegúrate que enlace al archivo CSS correcto si lo creaste
})
export class Footer {

}
