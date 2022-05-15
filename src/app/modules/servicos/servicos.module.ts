import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriRoutingModule } from './servicos-routing.module';
import { InscriComponent } from './pages/inscri/inscri.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';

import { EventCardComponent } from './components/event-card/event-card.component';

import { Inscri2Component } from './pages/inscri2/inscri2.component';
import { Inscri3Component } from './pages/inscri3/inscri3.component';
import { Inscri4Component } from './pages/inscri4/inscri4.component';
import { ListarChamadosComponent } from './pages/listar-chamados/listar-chamados.component';
import { Inscri6Component } from './pages/inscri6/inscri6.component';
import { Inscri7Component } from './pages/inscri7/inscri7.component';
import { Inscri8Component } from './pages/inscri8/inscri8.component';
import { Inscri9Component } from './pages/inscri9/inscri9.component';
import { InscricComponent } from './pages/inscric/inscric.component';
import { Inscric1Component } from './pages/inscric1/inscric1.component';
import { Inscri10Component } from './pages/inscri10/inscri10.component';
import { Inscric11Component } from './pages/inscric11/inscric11.component';
import { Inscric12Component } from './pages/inscric12/inscric12.component';
import { Inscric13Component } from './pages/inscric13/inscric13.component';
import { Inscric14Component } from './pages/inscric14/inscric14.component';
import { Inscric15Component } from './pages/inscric15/inscric15.component';
import { Inscric16Component } from './pages/inscric16/inscric16.component';

import { ServicosGuard } from './guards/servicos.guard';

import { ChamadosService } from 'src/app/shared/services/chamados.service';

@NgModule({
  declarations: [
    EventCardComponent,
    HomeComponent,
    InscriComponent,
    Inscri2Component,
    Inscri3Component,
    Inscri4Component,
    ListarChamadosComponent,
    Inscri6Component,
    Inscri7Component,
    Inscri8Component,
    Inscri9Component,
    InscricComponent,
    Inscric1Component,
    Inscri10Component,
    Inscric11Component,
    Inscric12Component,
    Inscric13Component,
    Inscric14Component,
    Inscric15Component,
    Inscric16Component,
  ],
  imports: [
    CommonModule,
    InscriRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
  ],
  providers: [ServicosGuard, ChamadosService],
})
export class ServicosModule {}
