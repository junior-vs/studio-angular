import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SeletorPassageiroComponent } from "../seletor-passageiro/seletor-passageiro.component";
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, SeletorPassageiroComponent, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
    constructor (public formBuscaService: FormBuscaService) {

    }

}
