import { Component, OnInit } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { CardBuscaComponent } from "../../shared/card-busca/card-busca.component";
import { CardDepoimentosComponent } from "../../shared/card-depoimentos/card-depoimentos.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { PromocaoService } from '../../core/service/promocao.service';
import { HttpClient } from '@angular/common/http';
import { Promocao } from '../../core/models/promocao.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ContainerComponent, CardBuscaComponent, CardDepoimentosComponent, FormBuscaComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[]
})
export class HomeComponent implements OnInit {

  promocoes: Promocao[] = [];

  constructor(private servicoPromocao: PromocaoService) { }

  ngOnInit(): void {
    this.servicoPromocao.lista().subscribe(
      (promocoes: Promocao[]) => {
        this.promocoes = promocoes;
      },
      (error) => {
        console.error('Erro ao carregar as promoções', error);
      }
    );

  }

}
