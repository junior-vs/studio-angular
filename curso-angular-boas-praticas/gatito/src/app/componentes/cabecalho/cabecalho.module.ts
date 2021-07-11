import { MenuModule } from './../menu/menu.module';
import { MenuComponent } from './../menu/menu.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho.component';



@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule
  ], exports: [
    CabecalhoComponent
  ]
})
export class CabecalhoModule { }
