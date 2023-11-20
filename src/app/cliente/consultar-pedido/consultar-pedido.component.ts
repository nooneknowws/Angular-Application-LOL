import { Component} from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { PedidosService } from 'src/app/funcionario/services/pedidos.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Pedido } from 'src/app/shared/models/pedido';
import { LoginService } from '../../autenticacao/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consultar-pedido',
  templateUrl: './consultar-pedido.component.html',
  styleUrls: ['./consultar-pedido.component.css'],
})
export class ConsultarPedidoComponent {
  id: number = 0;
  pedido: Pedido = new Pedido(0);
  filtro: string = '';
  pedidos: Pedido[] = [];

  constructor(
    private route: ActivatedRoute,
    private pedidoService: PedidosService,
    private loginService: LoginService
  ) {
    this.route.queryParams.subscribe((params) => {
      const idPedido = params['idPedido'];
      this.id = idPedido;
    });
  }
  ngOnInit(): void {
    this.pedidoService.listarPedidosporID(this.id).subscribe((pedido) => {
      this.pedido = pedido;
      this.pedidoService.setSomaDePrazos(pedido);
      this.pedidoService.setSomaDePrecos(pedido);
      this.pedidoService.setStatusPedido([pedido]);
      console.log(pedido.statuspedido)
    });
  }
  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }
  cancelaPedido(): void{
    if (this.pedido && this.pedido.statuspedido == 1) {
      this.pedido.statuspedido = 3;
      this.pedidoService.alterarPedidos(this.pedido).subscribe({
        next: (res: any) => {
          console.log("pedido cancelado", res);
        },
        error: (error: any) => {
          console.log("erro", error);
        }
      })
    }

  }
  confirmaPedido(): void{
    if (this.pedido && this.pedido.statuspedido == 5) {
      this.pedido.statuspedido = 6;
      this.pedidoService.alterarPedidos(this.pedido).subscribe({
        next: (res: any) => {
          console.log("pedido pago", res);
        },
        error: (error: any) => {
          console.log("erro", error);
        }
      })
    }


  }

  BuscarPedido(id:any){
    this.pedidoService.listarPedidosporID(id).subscribe((pedido) => {
      this.pedido = pedido;
      if(this.usuarioLogado && pedido.usuario?.id != this.usuarioLogado.id || pedido == null){
        this.pedido = new Pedido(0);
      }
      else{
      this.pedidoService.setSomaDePrazos(pedido);
      this.pedidoService.setSomaDePrecos(pedido);
    }
    },
    );
  }
  calculaMaiorPrazo(): number {
    var itens = this.pedido.itens;
    if (!itens || itens.length === 0) return 0;
    var roupaMaiorPrazo = itens[0].roupa?.prazo;

    for (let i = 1; i < itens.length; i++) {
      var prazoAtual = itens[i]?.roupa?.prazo;
      if (prazoAtual !== undefined && (roupaMaiorPrazo === undefined || prazoAtual > roupaMaiorPrazo))
      roupaMaiorPrazo = prazoAtual;
    }

    return roupaMaiorPrazo ? roupaMaiorPrazo : 0;
  }
}
