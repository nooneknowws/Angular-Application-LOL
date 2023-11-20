import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StatusPedido } from 'src/app/shared/models/status-pedido';
import { Pedido } from 'src/app/shared/models/pedido';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DataComponent } from '../data/data.component';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pedidos',
  templateUrl: './listar-pedidos.component.html',
  styleUrls: ['./listar-pedidos.component.css'],
})
export class ListarPedidosComponent implements OnInit {
  pedidos: Pedido[] = [];
  statusPedido = StatusPedido;
  selectedFilterOption: string = '';
  selectedDateRange: Date[] = [];
  private dateRangeModal: NgbModalRef | null = null;

  constructor(
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private pedidosService: PedidosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarPedidos()
  }
  listarPedidos(){
    this.pedidosService.listarPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
      this.pedidosService.setStatusPedido(pedidos);
      console.log(pedidos);
      this.pedidos.sort((a, b) => {
        const dateA = a.datadopedido ? new Date(a.datadopedido).getTime() : 0;
        const dateB = b.datadopedido ? new Date(b.datadopedido).getTime() : 0;
        return dateA - dateB;
      });
    });
  }
  openDateRangePickerModal() {
    this.dateRangeModal = this.modalService.open(DataComponent);
    this.dateRangeModal.componentInstance.dateRangeSelected.subscribe(
      (dates: Date[]) => {
        this.selectedDateRange = dates;
        this.filterPeriodo(this.selectedDateRange);
      }
    );

    this.dateRangeModal.hidden.subscribe(() => {
      if (this.dateRangeModal) {
        this.dateRangeModal.close();
        this.dateRangeModal = null;
      }
    });
  }
  filterPeriodo(dateRange: Date[]) {
    if (dateRange.length === 2) {
      this.pedidos = this.pedidos.filter((pedido) => {
        const pedidoDate = pedido.datadopedido
          ? new Date(pedido.datadopedido)
          : null;
        if (pedidoDate) {
          return pedidoDate >= dateRange[0] && pedidoDate <= dateRange[1];
        }
        return false;
      });
    }
  }
  filterPedidos(option: string) {
    this.selectedFilterOption = option;

    if (option === 'Pedidos de Hoje') {
      this.pedidos = this.pedidos.filter((pedido) => {
        const hoje = new Date();
        const dataPedido = pedido.datadopedido
          ? new Date(pedido.datadopedido)
          : null;
        return (
          dataPedido &&
          dataPedido.getDate() === hoje.getDate() &&
          dataPedido.getMonth() === hoje.getMonth() &&
          dataPedido.getFullYear() === hoje.getFullYear()
        );
      });
    } else if (option === 'Todos os Pedidos') {
      this.listarPedidos();
      };
    }

  AlterarStatus(pedido: Pedido) {
    if (pedido) {
      switch (pedido.statuspedido) {
        case 1:
          pedido.statuspedido = 4;
          this.pedidosService.alterarPedidos(pedido).subscribe({});
          break;
        case 4:
          pedido.statuspedido = 5;
          this.pedidosService.alterarPedidos(pedido).subscribe({});
          break;
        case 6:
          pedido.statuspedido = 7;
          this.pedidosService.alterarPedidos(pedido).subscribe({
          });
          break;
        }
    }
    window.location.reload()
  }
}
