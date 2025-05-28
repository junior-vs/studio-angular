import { Component } from '@angular/core';
import { ContainerComponent } from "../../shared/container/container.component";
import { BannerComponent } from "../../shared/banner/banner.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";
import { PromocoesComponent } from "./promocoes/promocoes.component";
import { DepoimentosComponent } from "./depoimentos/depoimentos.component";

@Component({
  selector: 'app-home',
  imports: [ContainerComponent, BannerComponent, FormBuscaComponent, PromocoesComponent, DepoimentosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
