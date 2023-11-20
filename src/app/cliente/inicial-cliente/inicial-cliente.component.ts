import { Usuario } from './../../shared/models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { ItemPedido } from 'src/app/shared/models/item-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { LoginService } from '../../autenticacao/services/login.service';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';

@Component({
  selector: 'app-inicial-cliente',
  templateUrl: './inicial-cliente.component.html',
  styleUrls: ['./inicial-cliente.component.css']
})
export class InicialClienteComponent implements OnInit{

  constructor(private loginService: LoginService, private pedidoService: PedidosService){

  }
  itens: ItemPedido[] = [];
  pedidos: Pedido[] = [];

  ngOnInit(): void{
   this.pedidoService.listarPedidosporIDCliente(this.usuarioLogado?.id).subscribe(
    pedidos => {
      this.pedidos = pedidos;
      console.log(pedidos);
    }
   )
    }
    get usuarioLogado(): Usuario | null {
      return this.loginService.usuarioLogado;
    }

}
