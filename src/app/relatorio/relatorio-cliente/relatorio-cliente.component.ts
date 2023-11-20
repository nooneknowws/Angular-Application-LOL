import { Component } from '@angular/core';
import { RelatorioService } from '../services/relatorio.service';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-relatorio-cliente',
  templateUrl: './relatorio-cliente.component.html',
  styleUrls: ['./relatorio-cliente.component.css']
})
export class RelatorioClienteComponent {
  clientes: Usuario [] = []
  constructor(private relatorioService: RelatorioService){

  }

  ngOnInit(): void{
    this.relatorioService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
        console.log(clientes)
      }
    )
  }

}
