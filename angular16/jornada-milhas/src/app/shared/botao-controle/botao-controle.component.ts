import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-botao-controle',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
})
export class BotaoControleComponent {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';
  @Input() src = '';
  @Input() alt = '';
}
