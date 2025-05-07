import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LoginComponent } from './pages/login/login.component';
import { BannerComponent } from "./shared/banner/banner.component";
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormBaseComponent } from './shared/form-base/form-base.component';
import { ContainerComponent } from "./shared/container/container.component";
import { DropdownUFComponent } from "./shared/dropdown-uf/dropdown-uf.component";
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    FormBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    BannerComponent,
    MatDatepickerModule,
    MatRadioModule,
    ContainerComponent,
    DropdownUFComponent,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
