import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import { Component, Input } from '@angular/core';
import { Depoimento } from '../../core/models/depoimento.model';

@Component({
  selector: 'app-card-depoimentos',
  imports: [MatCard, MatCardContent],
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.scss',
})
export class CardDepoimentosComponent {
  @Input() depoimento!: Depoimento;
}
