import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner/banner.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ContainerComponent, FormBuscaComponent, PromocoesComponent, DepoimentosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
