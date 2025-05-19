import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CardComponent } from '../card/card.component';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuscaService } from '../../core/services/form-busca.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// mat-button-toggle-group
@Component({
  selector: 'app-form-busca',
  imports: [
    CommonModule,
        ReactiveFormsModule,
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
})
export class FormBuscaComponent {

  constructor(public formBuscaSerice: FormBuscaService) {}

  buscar() {
    console.log(this.formBuscaSerice.formBusca.value);
  }
}
