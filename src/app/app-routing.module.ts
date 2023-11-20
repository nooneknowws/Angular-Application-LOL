import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './autenticacao/login/login.component';
import { CadastroComponent } from './autenticacao/cadastro/cadastro.component';
import { InicialFuncionarioComponent } from './funcionario/inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './funcionario/confirmar-recolhimento/confirmar-recolhimento.component';
import { ListarPedidosComponent } from './funcionario/listar-pedidos/listar-pedidos.component';
import { InicialClienteComponent } from './cliente/inicial-cliente/inicial-cliente.component';
import { ConsultarPedidoComponent } from './cliente/consultar-pedido/consultar-pedido.component';
import { ListarPedidosClienteComponent } from './cliente/listar-pedidos-cliente/listar-pedidos-cliente.component';
import { OrcamentoClienteComponent } from './cliente/orcamento-cliente/orcamento-cliente.component';
import { PedidosClienteComponent } from './cliente/pedidos-cliente/pedidos-cliente.component';
import { SelecionarRelatorioComponent } from './relatorio/selecionar-relatorio/selecionar-relatorio.component';

import { EditarFuncionarioComponent } from './funcionario/editar-funcionario/editar-funcionario.component';
import { ListarFuncionarioComponent } from './funcionario/listar-funcionario/listar-funcionario.component';
import { InserirFuncionarioComponent } from './funcionario/inserir-funcionario/inserir-funcionario.component';

import { ListarManutencaoComponent } from './funcionario/listar-manutencao/listar-manutencao.component';
import { EditarManutencaoComponent } from './funcionario/editar-manutencao/editar-manutencao.component';
import { InserirManutencaoComponent } from './funcionario/inserir-manutencao/inserir-manutencao.component';
import { AuthGuard } from './autenticacao/auth.guard';

import { RelatorioClienteComponent } from './relatorio/relatorio-cliente/relatorio-cliente.component';
import { RelatorioClienteFielComponent } from './relatorio/relatorio-cliente-fiel/relatorio-cliente-fiel.component';
import { RelatorioReceitaComponent } from './relatorio/relatorio-receita/relatorio-receita.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'autenticacao/login',
    pathMatch: 'full'
  },
  {
    path: 'autenticacao',
    redirectTo: 'autenticacao/login',
  },
  {
    path: 'autenticacao/login',
    component: LoginComponent
  },
  {
    path: 'autenticacao/cadastro',
    component: CadastroComponent
  },
  {
    path: 'funcionario/inicialFuncionario',
    component: InicialFuncionarioComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'funcionario/confirmacaoRecolhimento',
    component: ConfirmarRecolhimentoComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'funcionario/listarPedidos',
    component: ListarPedidosComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'funcionario/novoFuncionario',
    component: InserirFuncionarioComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN'
    }
  },
  {
    path: 'funcionario/listarFuncionario',
    component: ListarFuncionarioComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN'
    }
  },
  {

    path: 'funcionario/editarFuncionario/:id',
    component: EditarFuncionarioComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN'
    }

  },
  {
    path: 'funcionario/listarManutencao',
    component: ListarManutencaoComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'funcionario/editarManutencao',
    component: EditarManutencaoComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'funcionario/editarManutencao/:id',
    component: EditarManutencaoComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'funcionario/inserirManutencao',
    component: InserirManutencaoComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }

  },
  {
    path: 'cliente/inicialCliente',
    component: InicialClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'CLIENTE'
    }
  },
  {
    path: 'cliente/consultarPedido',
    component: ConsultarPedidoComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'CLIENTE'
    }
  },
  {
    path: 'cliente/listarPedidosCliente',
    component: ListarPedidosClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'CLIENTE'
    }
  },
  {
    path: 'cliente/orcamentoCliente',
    component: OrcamentoClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'CLIENTE'
    }
  },
  {
    path: 'cliente/pedidosCliente',
    component: PedidosClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'CLIENTE'
    }
  },
  {
    path: 'relatorio/selecionarRelatorio',
    component: SelecionarRelatorioComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'relatorio/relatorioCliente',
    component: RelatorioClienteComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'relatorio/relatorioReceita',
    component: RelatorioReceitaComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },
  {
    path: 'relatorio/relatorioFiel',
    component: RelatorioClienteFielComponent,
    canActivate: [AuthGuard],
    data: {
    role: 'ADMIN,FUNC'
    }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
