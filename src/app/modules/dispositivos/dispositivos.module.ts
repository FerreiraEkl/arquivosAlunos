import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositivosRoutingModule } from './dispositivos-routing.module';
import { DispositivoComponent } from './pages/dispositivo/dispositivo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { HomeComponent } from './pages/home/home.component';
import { Dispositivo2Component } from './pages/dispositivo2/dispositivo2.component';
import { RouterModule } from '@angular/router';
import { EventCardComponent } from './components/event-card/event-card.component';
import { Dispositivo3Component } from './pages/dispositivo3/dispositivo3.component';
import { Dispositivo4Component } from './pages/dispositivo4/dispositivo4.component';
import { Dispositivo5Component } from './pages/dispositivo5/dispositivo5.component';
import { Dispositivo6Component } from './pages/dispositivo6/dispositivo6.component';

import { DispositivosGuard } from './guards/dispositivos.guard';

@NgModule({
  declarations: [
    EventCardComponent,
    HomeComponent,
    DispositivoComponent,
    Dispositivo2Component,
    Dispositivo3Component,
    Dispositivo4Component,
    Dispositivo5Component,
    Dispositivo6Component,
  ],
  imports: [
    CommonModule,
    DispositivosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    RouterModule,
  ],
  providers: [DispositivosGuard],
})
export class DispositivosModule {}
