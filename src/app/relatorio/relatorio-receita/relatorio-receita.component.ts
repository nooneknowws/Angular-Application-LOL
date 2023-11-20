import { Component,OnInit, ChangeDetectorRef } from '@angular/core';
import { DataComponent } from 'src/app/funcionario/data/data.component';
import { Pedido } from 'src/app/shared/models/pedido';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';
import { Router } from '@angular/router';
import { RelatorioService } from '../services/relatorio.service';

@Component({
  selector: 'app-relatorio-receita',
  templateUrl: './relatorio-receita.component.html',
  styleUrls: ['./relatorio-receita.component.css']
})
export class RelatorioReceitaComponent {
  pedidos: Pedido[] = [];
  selectedFilterOption: string = '';
  selectedDateRange: Date[] = [];
  private dateRangeModal: NgbModalRef | null = null;

  constructor(
    private modalService: NgbModal,
    private cdr: ChangeDetectorRef,
    private pedidosService: PedidosService,
    private router: Router,
    private relatorio : RelatorioService
  ) {}

  ngOnInit():void{
    this.pedidosService.listarPedidos().subscribe((pedidos)=>{
      this.pedidos = pedidos.filter(pedido => pedido.statuspedido === 6 || pedido.statuspedido === 7);
      this.setSomaDePrecos(pedidos);
    }
    
    )
  }

  gerarRelatorio(){
    this.relatorio.generateReceitasPDF()
  }

  somaPedido(pedido: Pedido){
    this.pedidosService.setSomaDePrecos(pedido);
    return pedido.valorTotal;
  }

  setSomaDePrecos(pedidos: Pedido[]) {
    let total = 0;
  
    pedidos.forEach(pedido => {
      pedido.itens?.forEach(item => {
        const precoUnt = item.roupa?.preco;
        if (precoUnt !== undefined && item.quantidade !== undefined) {
          const mult = precoUnt * item.quantidade;
          total += mult;
        }
      });
    });
    pedidos.forEach(pedido => {
      pedido.valorTotal = total;
    });
  
    console.log("Total:", total);
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
      this.pedidosService.listarPedidos().subscribe((pedidos) => {
        this.pedidos = pedidos.filter((pedido) => {
          const pedidoDate = pedido.datadopedido
            ? new Date(pedido.datadopedido)
            : null;
          if (pedidoDate) {
            return pedidoDate >= dateRange[0] && pedidoDate <= dateRange[1] &&
              (pedido.statuspedido === 6 || pedido.statuspedido === 7);
          }
          return false;
        });
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
      this.pedidosService.listarPedidos().subscribe((pedidos)=>{
        this.pedidos = pedidos.filter(pedido => pedido.statuspedido === 6 || pedido.statuspedido === 7);
      })

      this.pedidos.sort((a, b) => {
        const dateA = a.datadopedido ? new Date(a.datadopedido).getTime() : 0;
        const dateB = b.datadopedido ? new Date(b.datadopedido).getTime() : 0;
        return dateA - dateB;
      });
    }
  }

}
