import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-botao-controle',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './botao-controle.component.html',
  styleUrls: ['./botao-controle.component.scss'],
  standalone: true,
})
export class BotaoControleComponent implements OnInit {
  @Input() operacao: 'incrementar' | 'decrementar' = 'incrementar';
  @Input() src = '';
  @Input() alt = '';
  @Input() title = '';

  ngOnInit(): void {
    // Set default title based on operation if not provided
    if (!this.title) {
      this.title =
        this.operacao === 'incrementar'
          ? 'Incrementar quantidade'
          : 'Decrementar quantidade';
    }

    // Set default src if not provided
    if (!this.src) {
      this.src =
        this.operacao === 'incrementar'
          ? 'assets/icones/add_circle.png'
          : 'assets/icones/do_not_disturb_on.png';
    }

    // Set default alt if not provided
    if (!this.alt) {
      this.alt =
        this.operacao === 'incrementar'
          ? 'Ícone do operador de adição'
          : 'Ícone do operador de subtração';
    }
  }
}
