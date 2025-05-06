import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/model/unidade-federativa.model';

import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { map, Observable, startWith } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-dropdown-uf',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUFComponent implements OnInit {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() iconePrefixo: string = '';
  @Input() control!: FormControl;

  unidadeFederativa: UnidadeFederativa[] = [];
  filteredOptions$?: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) {}

  ngOnInit(): void {
    this.unidadeFederativaService.listar().subscribe((dados) => {
      this.unidadeFederativa = dados;
      this.filteredOptions$ = this.control.valueChanges.pipe(
        startWith(''),
        map((value) => this._filterUFs(value))
      );
    });
  }

  private _filterUFs(value: string | UnidadeFederativa): UnidadeFederativa[] {
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadeFederativa.filter((uf) =>
      uf.nome.toLowerCase().includes(valorFiltrado)
    );
    return result;
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado && estado.nome ? estado.nome : '';
  }
}
