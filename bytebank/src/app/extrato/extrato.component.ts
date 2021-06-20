import { Transferencia } from './../services/transferencia';
import { Component, OnInit, Input } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  @Input() transferencias: Transferencia[] = [];

  constructor(private service: TransferenciaService) {

  }

  ngOnInit() {

    this.service.todas().subscribe((transferencias: any) => {(this.transferencias = transferencias)});

  }

}
