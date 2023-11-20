import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})

export class EditarFuncionarioComponent implements OnInit {
  @ViewChild("formFuncionario") formFuncionario!: NgForm;
  funcionario: Usuario  | undefined;
  private id = this.route.snapshot.params['id'];


  constructor(
    private funcionarioService: CrudFuncionarioService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit(): void {
  this.funcionarioService.buscarPorIdFuncionario(this.id).subscribe((funcionario: Usuario ) => {
  this.funcionario = funcionario;
  })

  }

  atualizar(): void {
    if (this.formFuncionario.form.valid && this.funcionario) {
      this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe({
        next: (res: any) => {
          this.router.navigate(['/funcionario/listarFuncionario']);
        },
        error: (error: any) => {
          console.error("Erro ao atualizar o funcionário:", error);
        }
      });
    }
  }

}
