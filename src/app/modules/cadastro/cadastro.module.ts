import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './pages/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    CadastroComponent,
    InscricaoComponent
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class CadastroModule { }
