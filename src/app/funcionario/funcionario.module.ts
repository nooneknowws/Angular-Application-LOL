import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InicialFuncionarioComponent } from './inicial-funcionario/inicial-funcionario.component';
import { ConfirmarRecolhimentoComponent } from './confirmar-recolhimento/confirmar-recolhimento.component';
import { ListarPedidosComponent } from './listar-pedidos/listar-pedidos.component';
import { CrudFuncionarioService } from './services/crud-funcionario.service';
import { ListarFuncionarioComponent } from './listar-funcionario/listar-funcionario.component';
import { FormsModule } from '@angular/forms';
import { InserirFuncionarioComponent } from './inserir-funcionario/inserir-funcionario.component';
import { EditarFuncionarioComponent } from './editar-funcionario/editar-funcionario.component';
import { ListarManutencaoComponent } from './listar-manutencao/listar-manutencao.component';
import { InserirManutencaoComponent } from './inserir-manutencao/inserir-manutencao.component';
import { EditarManutencaoComponent } from './editar-manutencao/editar-manutencao.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DataComponent } from './data/data.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InicialFuncionarioComponent,
    ConfirmarRecolhimentoComponent,
    ListarPedidosComponent,
    ListarFuncionarioComponent,
    InserirFuncionarioComponent,
    ListarManutencaoComponent,
    InserirManutencaoComponent,
    EditarManutencaoComponent,
    DataComponent,
    EditarFuncionarioComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbDatepickerModule,
    HttpClientModule
  ],
 providers: [
  CrudFuncionarioService,
 ]

})
export class FuncionarioModule { }
