import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';


import { EventCardComponent } from './components/event-card/event-card.component';

import { HomeComponent } from './pages/home/home.component';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';
import { Inscricao2Component } from './pages/inscricao2/inscricao2.component';
import { Inscricao3Component } from './pages/inscricao3/inscricao3.component';
import { Inscricao4Component } from './pages/inscricao4/inscricao4.component';
import { Inscricao5Component } from './pages/inscricao5/inscricao5.component';
import { Inscricao6Component } from './pages/inscricao6/inscricao6.component';
import { Inscricao7Component } from './pages/inscricao7/inscricao7.component';
import { Inscricao8Component } from './pages/inscricao8/inscricao8.component';
import { Inscricao9Component } from './pages/inscricao9/inscricao9.component';
import { Inscricao10Component } from './pages/inscricao10/inscricao10.component';
import { Inscricao11Component } from './pages/inscricao11/inscricao11.component';
import { Inscricao12Component } from './pages/inscricao12/inscricao12.component';
import { Inscricao13Component } from './pages/inscricao13/inscricao13.component';
import { Inscricao14Component } from './pages/inscricao14/inscricao14.component';
import { Inscricao16Component } from './pages/inscricao16/inscricao16.component';
import { Inscricao17Component } from './pages/inscricao17/inscricao17.component';
import { Inscricao18Component } from './pages/inscricao18/inscricao18.component';
import { Inscricao19Component } from './pages/inscricao19/inscricao19.component';
import { Inscricao20Component } from './pages/inscricao20/inscricao20.component';
import { Inscricao21Component } from './pages/inscricao21/inscricao21.component';
import { Inscricao22Component } from './pages/inscricao22/inscricao22.component';

import { ChamadosGuard } from './guards/chamados.guard';

import { ChamadosService } from 'src/app/shared/services/chamados.service';

import { ChamadosRoutingModule } from './chamados-routing.module';

@NgModule({
  declarations: [
    InscricaoComponent,
    HomeComponent,
    Inscricao2Component,
    EventCardComponent,
    Inscricao3Component,
    Inscricao4Component,
    Inscricao5Component,
    Inscricao6Component,
    Inscricao7Component,
    Inscricao8Component,
    Inscricao9Component,
    Inscricao10Component,
    Inscricao11Component,
    Inscricao12Component,
    Inscricao13Component,
    Inscricao14Component,
    Inscricao16Component,
    Inscricao17Component,
    Inscricao18Component,
    Inscricao19Component,
    Inscricao20Component,
    Inscricao21Component,
    Inscricao22Component,

  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    ChamadosGuard,
    ChamadosService
  ]
})
export class ChamadosModule { }
