import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ChamadosGuard } from './guards/chamados.guard';

const routes: Routes = [
  {
    path:'',
    children:[
      { path: '', component: HomeComponent },
      { path: 'chamado1', component: InscricaoComponent, canActivate: [AuthGuard] },
      { path: 'chamado2', component: Inscricao2Component, canActivate: [AuthGuard] },
      { path: 'chamado3', component: Inscricao3Component },
      { path: 'chamado4', component: Inscricao4Component },
      { path: 'chamado5', component: Inscricao5Component },
      { path: 'chamado6', component: Inscricao6Component },
      { path: 'chamado7', component: Inscricao7Component },
      { path: 'chamado8', component: Inscricao8Component },
      { path: 'chamado9', component: Inscricao9Component },
      { path: 'chamado10', component: Inscricao10Component },
      { path: 'chamado11', component: Inscricao11Component },
      { path: 'chamado12', component: Inscricao12Component },
      { path: 'chamado13', component: Inscricao13Component },
      { path: 'chamado14', component: Inscricao14Component },
      { path: 'chamado16', component: Inscricao16Component },
      { path: 'chamado17', component: Inscricao17Component },
      { path: 'chamado18', component: Inscricao18Component },
      { path: 'chamado19', component: Inscricao19Component },
      { path: 'chamado20', component: Inscricao20Component },
      { path: 'chamado21', component: Inscricao21Component },
      { path: 'chamado22', component: Inscricao22Component }
    ],
    canActivate:[ChamadosGuard]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadosRoutingModule { }
