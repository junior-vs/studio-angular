import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;

  generoOption: string = '';
  generoOptions: string[] = ['Masculino', 'Feminino', 'Outros', 'Prefiro nao dizer'];

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(): void {
    this.cadastroForm = this.formBuider.group({
      nome: [null],
      email: [null],
      dataNascimento: [null],
      genero: [null],
      senha: [null],
      confirmarSenha: [null],
    });
  }
  cadastrar() {
    // Lógica de cadastro
    console.log('Cadastro realizado com sucesso!');
  }
}
