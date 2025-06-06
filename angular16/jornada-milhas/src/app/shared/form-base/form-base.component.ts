import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/model/unidade-federativa.model';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { FormValidations } from '../form-validations';


@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss'],
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup;
  estadoControl = new FormControl<UnidadeFederativa | null>(
    null,
    Validators.required
  );

  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: ['12312312123', [Validators.required]],
      cidade: ['City', Validators.required],
      email: ['chapolin@email.com', [Validators.required, Validators.email]],
      senha: ['123', [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: ['12312312123', Validators.required],
      estado: this.estadoControl,
      confirmarEmail: [
        'chapolin@email.com',
        [
          Validators.required,
          Validators.email,
          FormValidations.equalTo('email'),
        ],
      ],
      confirmarSenha: [
        '123',
        [
          Validators.required,
          Validators.minLength(3),
          FormValidations.equalTo('senha'),
        ],
      ],
      aceitarTermos: [false, [Validators.requiredTrue]],
    });
    this.formularioService.setCadastro(this.cadastroForm);
  }

  executarAcao() {
    this.acaoClique.emit();
  }
}
