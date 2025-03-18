import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { ContainerComponent } from "./componentes/container/container.component";
import { ContatoComponent } from "./componentes/contato/contato.component";
import { SeparadorComponent } from "./componentes/separador/separador.component";
import { Contato } from './core/model/contato';
import { ContatoService } from './core/services/contato.service';
import { FormularioContatoComponent } from "./paginas/formulario-contato/formulario-contato.component";

@Component({
  selector: 'app-root',
  imports: [
    //RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormularioContatoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  title = 'indexa';
  contatos: Contato[] = [];
  filtroPorTexto: string = '';

  constructor(private contatoService: ContatoService) {}

  ngOnInit(): void {
    this.contatoService.getContatos().subscribe((data: Contato[]) => {
      this.contatos = data;
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
