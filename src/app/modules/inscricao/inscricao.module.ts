import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscricaoRoutingModule } from './inscricao-routing.module';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    InscricaoComponent
  ],
  imports: [
    CommonModule,
    InscricaoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,    
    NgxMaskModule.forRoot()
  ]
})
export class InscricaoModule { }
