import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscricaoComponent } from './pages/inscricao/inscricao.component';

const routes: Routes = [{ path: '', component: InscricaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
