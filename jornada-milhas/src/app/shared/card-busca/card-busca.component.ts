import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { Promocao } from '../../core/models/promocao.model';

@Component({
  selector: 'app-card-busca',
  imports: [MatCard, MatCardActions, MatCardContent, MatButtonModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.scss',
})
export class CardBuscaComponent {
  @Input()
  promocao!: Promocao;
}
