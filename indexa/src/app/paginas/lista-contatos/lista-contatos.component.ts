import { Component } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { Contato } from '../../core/model/contato';
import { ContatoService } from '../../core/services/contato.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  imports: [
    CommonModule,
    FormsModule,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    RouterModule
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.scss',
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';

  contatos: Contato[] = [];
  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatoService.obterContatos().subscribe((data: Contato[]) => {
      this.contatos = data;
      console.log(this.contatos);
    });
  }

  filtrarContatosPorTexto(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter((contato) => {
      // Compara os nomes sem acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    });
  }

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  /**
   * Filters the list of contacts by the initial letter of their names.
   *
   * @param letra - The initial letter to filter contacts by.
   * @returns An array of contacts whose names start with the specified letter.
   */
  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter((contato) => {
      // Compara a letra inicial sem considerar acentuações
      return this.removerAcentos(contato.nome)
        .toLowerCase()
        .startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
