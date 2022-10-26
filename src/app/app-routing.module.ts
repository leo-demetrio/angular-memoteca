import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarpensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarpensamento',
    component: CriarPensamentoComponent
  },
  {
    path: 'listarpensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'pensamentos/excluirpensamento/:id',
    component: ExcluirPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
