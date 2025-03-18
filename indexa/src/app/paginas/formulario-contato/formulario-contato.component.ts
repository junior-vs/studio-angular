import { Component } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-contato',
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.scss',
})
export class FormularioContatoComponent {
  contatoForm!: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Nay'),
      telefone: new FormControl(''),
      email: new FormControl(''),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl(''),
    });
  }
}
