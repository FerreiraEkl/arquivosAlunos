import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarService } from './services/navbar.service';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCommonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCardModule,
    MatBadgeModule,
    TextFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    RouterModule,
    NgxPermissionsModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatCommonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatCardModule,
    MatBadgeModule,
    TextFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    NavbarComponent
  ],
  providers: [
    NavbarService
  ]
})
export class SharedModule { }
