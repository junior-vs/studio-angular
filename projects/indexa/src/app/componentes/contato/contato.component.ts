import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent {

  @Input() nome: string = '';
  @Input() telefone: string = '';

}
