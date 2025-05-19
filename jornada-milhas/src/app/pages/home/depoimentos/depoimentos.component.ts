import { Component, OnInit } from '@angular/core';
import { CardDepoimentosComponent } from "../../../shared/card-depoimentos/card-depoimentos.component";
import { Depoimento } from '../../../core/models/depoimento.model';
import { DepoimentoService } from '../../../core/services/depoimento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-depoimentos',
  imports: [CardDepoimentosComponent, CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent implements OnInit {

  depoimentos:Depoimento[] = [];

  constructor(private service:DepoimentoService){

  }
  ngOnInit(): void {
    this.service.listar().subscribe((data:Depoimento[]) => {
      this.depoimentos = data;
    });
  }


}
