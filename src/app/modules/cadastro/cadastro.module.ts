import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    CadastrarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CadastroRoutingModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class CadastroModule { }
