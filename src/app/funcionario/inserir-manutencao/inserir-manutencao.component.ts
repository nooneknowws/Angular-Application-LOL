import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-manutencao',
  templateUrl: './inserir-manutencao.component.html',
  styleUrls: ['./inserir-manutencao.component.css']
})
export class InserirManutencaoComponent implements OnInit {
  @ViewChild('formManutencao') formManutencao! : NgForm;
  manutencao! : Manutencao;
peca: any;

  constructor(private manutencaoService : CrudFuncionarioService,
    private router : Router) { }

  ngOnInit(): void {
      this.manutencao = new Manutencao();
  }

  inserirManutencao(): void {
    console.log('Dados a serem enviados:', this.manutencao);
    this.manutencaoService.inserirManutencao(this.manutencao)
      .subscribe(
        response => {
          console.log('Peça de roupa inserida com sucesso', response);
          this.router.navigate(['/funcionario/listarManutencao']);
        },
        error => {
          console.error('Erro ao inserir manutenção:', error);
  
          if (error.status === 400) {
            console.log('Detalhes do erro:', error.error);
          }
        }

      );
  }
  

}
