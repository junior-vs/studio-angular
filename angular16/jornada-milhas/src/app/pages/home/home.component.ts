import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../../shared/banner/banner.component";
import { ContainerComponent } from "../../shared/container/container.component";
import { PromocaoComponent } from "./promocao/promocao.component";
import { DepoimentoComponent } from "./depoimento/depoimento.component";
import { FormBuscaComponent } from "../../shared/form-busca/form-busca.component";
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    BannerComponent,
    ContainerComponent,
    PromocaoComponent,
    DepoimentoComponent,
    FormBuscaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private pomosaoService: PromocaoService) {}

  ngOnInit(): void {}

  // Add any methods or properties needed for the component
}
