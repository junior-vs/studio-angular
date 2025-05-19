import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Promocao } from '../../core/models/promocao.model';
import { PromocaoService } from '../../core/services/promocao.service';
import { BannerComponent } from "../../shared/banner/banner.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";
import { PromocoesComponent } from "./promocoes/promocoes.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ContainerComponent, FormBuscaComponent, CommonModule, PromocoesComponent, DepoimentosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers:[]
})
export class HomeComponent{



}
