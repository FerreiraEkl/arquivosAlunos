import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DispositivoComponent } from './pages/dispositivo/dispositivo.component';
import { Dispositivo2Component } from './pages/dispositivo2/dispositivo2.component';
import { Dispositivo3Component } from './pages/dispositivo3/dispositivo3.component';
import { Dispositivo4Component } from './pages/dispositivo4/dispositivo4.component';
import { Dispositivo5Component } from './pages/dispositivo5/dispositivo5.component';
import { Dispositivo6Component } from './pages/dispositivo6/dispositivo6.component';

import { DispositivosGuard } from './guards/dispositivos.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component:  HomeComponent},
      { path: 'celular', component:  DispositivoComponent},
      { path: 'tablets', component:  Dispositivo2Component},
      { path: 'linhas', component:  Dispositivo3Component},
      { path: 'adilinhas', component:  Dispositivo4Component},
      { path: 'liscautelas', component:  Dispositivo5Component},
      { path: 'note', component:  Dispositivo6Component},
    ],
    canActivate: [DispositivosGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosRoutingModule {}
