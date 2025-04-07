import { Component } from '@angular/core';
import { CardBuscaComponent } from "../../../shared/card-busca/card-busca.component";
import { Promocao } from '../../../core/models/promocao.model';
import { PromocaoService } from '../../../core/services/promocao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promocoes',
  imports: [CardBuscaComponent, CommonModule],
  templateUrl: './promocoes.component.html',
  styleUrl: './promocoes.component.scss'
})
export class PromocoesComponent {

    promocoes:Promocao[]=[];


    constructor(private service:PromocaoService){

    }
    ngOnInit(): void {
      this.service.lista().subscribe((data:Promocao[]) => {
        this.promocoes = data;
      });
    }
}
