import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ForfaitsXComponentComponent } from './forfaits-x-component/forfaits-x-component.component';
import { ForfaitsYComponentComponent } from './forfaits-y-component/forfaits-y-component.component';
import { AproposComponentComponent } from './apropos-component/apropos-component.component';
import { AdministrationComponentComponent } from './administration-component/administration-component.component';
import { OptionComponentComponent } from './option-component/option-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ForfaitMiniComponent,
    ForfaitCompletComponent,
    FormulaireForfaitComponent,
    ToolbarComponent,
    EtoilesComponent,
    FormulaireRechercheComponent,
    AcceuilComponent,
    ForfaitsXComponentComponent,
    ForfaitsYComponentComponent,
    AproposComponentComponent,
    AdministrationComponentComponent,
    OptionComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
