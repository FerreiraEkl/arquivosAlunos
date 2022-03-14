import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InscriComponent } from './pages/inscri/inscri.component';
import { Inscri2Component } from './pages/inscri2/inscri2.component';
import { Inscri3Component } from './pages/inscri3/inscri3.component';
import { Inscri4Component } from './pages/inscri4/inscri4.component';
import { Inscri5Component } from './pages/inscri5/inscri5.component';
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
import { ServicosGuard } from './guards/servicos.guard';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'incluir1', component: InscriComponent },
      { path: 'incluir2', component: Inscri2Component },
      { path: 'incluir3', component: Inscri3Component },
      { path: 'alterar', component: Inscri4Component },
      { path: 'listar', component: Inscri5Component },
      { path: 'fechar', component: Inscri6Component },
      { path: 'registro', component: Inscri7Component },
      { path: 'listarr', component: Inscri8Component },
      { path: 'fecharr', component: Inscri9Component },
      { path: 'incluir4', component: InscricComponent },
      { path: 'cliente', component: Inscric1Component },
      { path: 'cliente1', component: Inscri10Component },
      { path: 'cliente2', component: Inscric11Component },
      { path: 'cliente3', component: Inscric12Component },
      { path: 'cliente4', component: Inscric13Component },
      { path: 'registro1', component: Inscric14Component }
    ],
    canActivate: [ServicosGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InscriRoutingModule { }
