import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialClienteComponent } from './inicial-cliente/inicial-cliente.component';
import { RouterModule } from '@angular/router';
import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { ListarPedidosClienteComponent } from './listar-pedidos-cliente/listar-pedidos-cliente.component';
import { OrcamentoClienteComponent } from './orcamento-cliente/orcamento-cliente.component';
import { PedidosClienteComponent } from './pedidos-cliente/pedidos-cliente.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    InicialClienteComponent,
    ConsultarPedidoComponent,
    ListarPedidosClienteComponent,
    OrcamentoClienteComponent,
    PedidosClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ClienteModule { }
