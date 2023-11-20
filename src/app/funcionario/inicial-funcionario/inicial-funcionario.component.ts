import { Component } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { Pedido } from 'src/app/shared/models/pedido';

@Component({
  selector: 'app-inicial-funcionario',
  templateUrl: './inicial-funcionario.component.html',
  styleUrls: ['./inicial-funcionario.component.css']
})
export class InicialFuncionarioComponent {
  constructor(private pedidoService: PedidosService) {}
  pedidos: Pedido[] = []

  ngOnInit(): void {
    this.pedidoService.listarPedidos().subscribe(
      pedidos => {
        this.pedidos = pedidos;
        this.pedidoService.ordenarPorDatacrescente(pedidos)

      }
    )
  }
  recolherPedido(pedido: Pedido){
    if(pedido.statuspedido == 1){
      pedido.statuspedido = 4
      this.pedidoService.alterarPedidos(pedido).subscribe({});
    }
    else {
      alert("Pedido não está em aberto!")
    }

  }
  hasOpenOrders(): boolean {
    return !this.pedidos || this.pedidos.some(pedido => pedido.statuspedido === 1);
  }

}
