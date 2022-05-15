import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastro',
    loadChildren: () =>
      import('./modules/cadastro/cadastro.module').then(
        (m) => m.CadastroModule
      ),
  },
  {
    path: 'chamados',
    loadChildren: () =>
      import('./modules/chamados/chamados.module').then(
        (m) => m.ChamadosModule
      ),
  },
  {
    path: 'servicos',
    loadChildren: () =>
      import('./modules/servicos/servicos.module').then(
        (m) => m.ServicosModule
      ),
  },

  {
    path: 'dispositivos',
    loadChildren: () =>
      import('./modules/dispositivos/dispositivos.module').then(
        (m) => m.DispositivosModule
      ),
  },

  // ROTAS PADRÃO ========================
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
