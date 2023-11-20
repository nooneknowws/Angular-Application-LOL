import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../services/relatorio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-selecionar-relatorio',
  templateUrl: './selecionar-relatorio.component.html',
  styleUrls: ['./selecionar-relatorio.component.css']
})

export class SelecionarRelatorioComponent implements OnInit {
    constructor(private relatorioService : RelatorioService, private router: Router) {}

    gerarRelatorio(id:string) {
      switch(id) {
        case "clientes" : this.relatorioService.generateClientePDF();
        break;
        case "receitas" : this.router.navigate(['relatorio/relatorioReceita']);
        break;
        case "clientesFieis" : this.relatorioService.generateClientesFieisPDF();
        break;
        default : alert("Relatório Inválido!");
      }
    }

  ngOnInit(): void {
  }

}






