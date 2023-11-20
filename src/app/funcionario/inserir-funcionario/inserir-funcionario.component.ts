import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent {
  @ViewChild('formFuncionario') formFuncionario!: NgForm;
  funcionario: any = { endereco: {
    cep: null,

  } };

  constructor(
    private funcionarioService: CrudFuncionarioService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.funcionario = new Usuario ();
  }
  
  inserirFuncionario(): void {
    if (!this.funcionario.endereco) {
      this.funcionario.endereco = {};
    }
    this.funcionario.perfil = "FUNC"
    this.funcionario.endereco.cep = 1
    this.funcionarioService.inserirFuncionario(this.funcionario)
      .subscribe(
        response => {
          console.log('Funcionario inserido com sucesso', response);
          this.router.navigate(['/funcionario/listarFuncionario']);
        }

      );
  }

}
