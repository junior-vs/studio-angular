import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBuscaComponent } from "../../../shared/card-busca/card-busca.component";
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/model/promocao.model';

@Component({
  selector: 'app-promocao',
  standalone: true,
  imports: [CommonModule, CardBuscaComponent],
  templateUrl: './promocao.component.html',
  styleUrls: ['./promocao.component.scss']
})
export class PromocaoComponent implements OnInit {

  promocoes: Promocao[] = [];
  constructor(private promocaoService: PromocaoService) { }

  ngOnInit(): void {

     this.promocaoService.getPromocoes().subscribe(res => {
      this.promocoes = res;
    });
  }


  // Add any methods or properties needed for the component

}
