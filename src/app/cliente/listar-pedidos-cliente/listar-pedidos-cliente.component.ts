import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from 'src/app/autenticacao/services/login.service';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';

@Component({
  selector: 'app-listar-pedidos-cliente',
  templateUrl: './listar-pedidos-cliente.component.html',
  styleUrls: ['./listar-pedidos-cliente.component.css'],
})
export class ListarPedidosClienteComponent implements OnInit {
  statusPedido = StatusPedido;
  pedidos: Pedido[] = [];
  selectedFilterOption: string = '';
  selectedDateRange: Date[] = [];

  constructor(
    private router: Router,
    private loginService: LoginService,
    private pedidoService: PedidosService
  ) {}

  ngOnInit(): void {
    this.listarPedidos();
  }

  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }
  NavegarPedido(event: Event, id: number | undefined) {
    event.preventDefault();
    const navigationExtras: NavigationExtras = {
      queryParams: { idPedido: id },
    };
    this.router.navigate(['/cliente/consultarPedido'], navigationExtras);
  }

  showFilteredResults: boolean = false;
  filteredPedidos: Pedido[] = [];

  filtroStatus(pedidos: Pedido[], status: string) {
    this.filteredPedidos = pedidos.filter((pedido) => {
      return pedido.status?.Status === status;
    });

    this.showFilteredResults = true;
  }

  filterPedidos() {
    this.showFilteredResults = false;
  }

  listarPedidos(): Pedido[] {
    this.pedidoService
      .listarPedidosporIDCliente(this.usuarioLogado?.id)
      .subscribe((pedidos) => {
        this.pedidos = pedidos;
        this.pedidoService.setStatusPedido(pedidos);
        this.pedidoService.ordenarPorDatadescrescente(pedidos)
      });
    return this.pedidos;
  }
}
