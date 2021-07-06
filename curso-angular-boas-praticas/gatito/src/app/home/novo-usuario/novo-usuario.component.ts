import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup

  constructor(private formbuilder: FormBuilder, private NovoUsuarioService: NovoUsuarioService) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formbuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: ['']
    })
  }

  cadastrar() {
    const novousuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

    console.log(novousuario);

  }

}
