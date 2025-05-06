import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Depoimento } from 'src/app/core/model/depoimento.model';
import { DepoimentosService } from 'src/app/core/services/depoimentos.service';
import { CardDepoimentoComponent } from "../../../shared/card-depoimento/card-depoimento.component";

@Component({
  selector: 'app-depoimento',
  standalone: true,
  imports: [CommonModule, CardDepoimentoComponent],
  templateUrl: './depoimento.component.html',
  styleUrls: ['./depoimento.component.scss'],
})
export class DepoimentoComponent {
  depoimentos: Depoimento[] = [];
  constructor(private service: DepoimentosService) {}
  ngOnInit(): void {
    this.service.listar().subscribe((res) => {
      this.depoimentos = res;
    });
  }
}
