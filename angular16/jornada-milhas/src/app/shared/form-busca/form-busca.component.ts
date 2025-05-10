import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DropdownUFComponent } from '../dropdown-uf/dropdown-uf.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DropdownUFComponent,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    console.log(this.formBuscaService.formBusca.value);
  }
}
