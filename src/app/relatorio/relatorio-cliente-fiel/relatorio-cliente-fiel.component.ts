import { Component } from '@angular/core';
import { ClientePedido } from 'src/app/shared/models/cliente-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidosService } from '../../funcionario/services/pedidos.service';

@Component({
  selector: 'app-relatorio-cliente-fiel',
  templateUrl: './relatorio-cliente-fiel.component.html',
  styleUrls: ['./relatorio-cliente-fiel.component.css'],
})
export class RelatorioClienteFielComponent {
  clientesMap: { [key: string]: ClientePedido } = {};
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}

  ngOnInit(): void {
    this.pedidosService.listarPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
      this.contarPedidos();
      this.limitTopClients(3);
    });
  }

  contarPedidos() {
    this.pedidos.forEach((pedido: any) => {
      const userId: string | undefined = pedido.usuario?.id;
      if (userId) {
        if (!this.clientesMap[userId]) {
          this.clientesMap[userId] = new ClientePedido(0, 0, new Date());
          this.clientesMap[userId].idCliente = userId;
          this.clientesMap[userId].nome = pedido.usuario?.nome;
          this.clientesMap[userId].quantidade = 0;
          this.clientesMap[userId].valorTotal = 0;
          this.clientesMap[userId].data = pedido.datadopedido;
        }

        if (pedido.statuspedido !== 2 && pedido.statuspedido !== 3) {
          this.clientesMap[userId].quantidade++;
        }

        if (pedido.itens && Array.isArray(pedido.itens)) {
          pedido.itens.forEach((item: any) => {
            if (
              pedido.statuspedido === 6 ||
              (pedido.statuspedido === 7 &&
                item.roupa &&
                item.roupa.preco &&
                item.quantidade)
            ) {
              const preco = item.roupa.preco;
              const quantidade = item.quantidade;
              this.clientesMap[userId].valorTotal += preco * quantidade;
            }
          });
        }

        if (pedido.datadopedido < this.clientesMap[userId].data) {
          this.clientesMap[userId].data = pedido.datadopedido;
        }
      }
    });
  }

  limitTopClients(limit: number) {
    const clientesArray = Object.entries(this.clientesMap);
    clientesArray.sort((a, b) => {
      return (
        b[1].quantidade - a[1].quantidade || b[1].valorTotal - a[1].valorTotal
      );
    });
    const topClients = clientesArray.slice(0, limit);
    const limitedClientesMap: { [key: string]: ClientePedido } = {};
    topClients.forEach(([key, value]) => {
      limitedClientesMap[key] = value;
    });
    this.clientesMap = limitedClientesMap;
  }
}
