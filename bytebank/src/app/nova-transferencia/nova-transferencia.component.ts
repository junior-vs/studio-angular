import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Transferencia } from '../services/transferencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number;
  destino: number;
  @Output() aoTransferir = new EventEmitter();

  constructor(private service: TransferenciaService, private router: Router) {
    this.valor = 0;
    this.destino = 0;
  }

  ngOnInit() {
    //comentario
  }

  transferir() {
    console.log('Solicitada nova transferência');
    let valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limpaOsDados();
        this.router.navigateByUrl('extrato');
      },
      (error) => console.log(error)
    );
  }

  limpaOsDados() {
    this.valor = 0;
    this.destino = 0;
  }
}
