import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { Promocao } from 'src/app/core/model/promocao.model';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card-busca.component.html',
  styleUrls: ['./card-busca.component.scss'],
})
export class CardBuscaComponent {
  @Input() promocao!: Promocao;
}
