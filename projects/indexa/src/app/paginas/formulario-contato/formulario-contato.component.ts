import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routes } from '../../app.routes';
import { Route, Router } from '@angular/router';
import { ContatoService } from '../../core/services/contato.service';

@Component({
  selector: 'app-formulario-contato',
  imports: [
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.scss',
})
export class FormularioContatoComponent {
  readonly phoneRegex = /^\+55\d{2}9\d{8}$/; // Adjust this regex to match your needs
  contatoForm!: FormGroup;

  constructor(private router: Router, private contatoService: ContatoService) {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required, phoneValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato);
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos');
  }
  cancelar() {
    this.contatoForm.reset();
    this.router.navigate(['']);
  }
}

/**
 * Validates a phone number to ensure it matches the specified Brazilian phone number format.
 * The expected format is: +55 followed by a 2-digit area code, the digit 9, and an 8-digit phone number.
 *
 * AbstractControl is a base class for form controls, form groups, and form arrays in Angular.
 *
 * @param control - The form control containing the phone number to validate.
 * @returns A validation error object with the key `invalidPhone` if the phone number is invalid, or `null` if it is valid.
 */
export function phoneValidator(
  control: AbstractControl
): ValidationErrors | null {
  const phoneRegex = /^\+55\d{2}9\d{8}$/; // Adjust this regex to match your needs
  const valid = phoneRegex.test(control.value);
  return valid ? null : { invalidPhone: true };
}
