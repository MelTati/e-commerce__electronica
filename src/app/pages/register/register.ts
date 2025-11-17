import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})

export class RegisterComponent {
  
  readonly registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      telefono: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get telefono(): AbstractControl | null {
    return this.registerForm.get('telefono');
  }

  get nombre(): AbstractControl | null {
    return this.registerForm.get('nombre');
  }

  get email(): AbstractControl | null {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Formulario de registro enviado:', this.registerForm.value);
      // Aquí puedes llamar a tu servicio para registrar el usuario
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.values(this.registerForm.controls).forEach((control: AbstractControl) => {
      control.markAsTouched();
    });
  }
}