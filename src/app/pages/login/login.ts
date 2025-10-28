import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// Importo los módulos esenciales para trabajar con formularios reactivos:
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login', // El selector que usaré en el HTML principal.
  standalone: true, // ¡Lo hice componente autónomo para simplificar las dependencias!
  // Importo los módulos necesarios para que las directivas y el formulario funcionen.
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})

export class Login {
  // Declaro mi formulario reactivo principal de tipo FormGroup.
  loginForm: FormGroup;

  // Inyecto FormBuilder (fb) para facilitar la construcción del formulario.
  constructor(private fb: FormBuilder) {
    // Uso fb.group() para definir la estructura de mi formulario.
    this.loginForm = this.fb.group({
      // Campo 'email':
      // 1. Valor inicial: '' (cadena vacía)
      // 2. Validadores: [Obligatorio, Patrón de email válido (regex)]
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      ]],

      // Campo 'password':
      // 1. Valor inicial: ''
      // 2. Validadores: [Obligatorio, Longitud mínima de 6 caracteres]
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
    });
  }

  // --- Getters para Validaciones en el Template (HTML) ---

  // Getter de conveniencia para acceder al control 'email' más fácilmente en el template.
  get email() {
    return this.loginForm.get('email');
  }

  // Getter de conveniencia para acceder al control 'password' en el template.
  get password() {
    return this.loginForm.get('password');
  }

  // --- Lógica de Envío del Formulario ---

  onSubmit() {
    // Verifico si el estado del formulario es 'válido' según todos mis validadores.
    if (this.loginForm.valid) {
      console.log('Formulario válido, ¡listo para enviar!', this.loginForm.value);
    } else {
      // Si no es válido, puedo opcionalmente marcar todos los campos como 'tocados'
      // para que se muestren los mensajes de error inmediatamente.
      this.loginForm.markAllAsTouched();
      console.log('Error: Formulario inválido. Revisar los campos.');
    }
  }
}
