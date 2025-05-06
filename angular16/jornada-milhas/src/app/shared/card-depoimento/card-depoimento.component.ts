import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Depoimento } from 'src/app/core/model/depoimento.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
})
export class CardDepoimentoComponent {
  @Input() depoimento!: Depoimento;
}
