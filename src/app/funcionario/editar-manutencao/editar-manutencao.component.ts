import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Manutencao } from 'src/app/shared/models/manutencao.model';

@Component({
  selector: 'app-editar-manutencao',
  templateUrl: './editar-manutencao.component.html',
  styleUrls: ['./editar-manutencao.component.css']
})
export class EditarManutencaoComponent implements OnInit {
  @ViewChild("formManutencao") formManutencao! : NgForm;
  manutencao!: Manutencao;
  private id = this.route.snapshot.params['id'];
  
  
  constructor(
    private manutencaoService: CrudFuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  this.manutencaoService.buscarPorIdManutencao(this.id).subscribe((manutencao: Manutencao ) => {
  this.manutencao = manutencao;
  })
  }

  atualizar(): void {
    if (this.formManutencao.form.valid && this.manutencao) {
      this.manutencaoService.atualizarManutencao(this.manutencao).subscribe({
        next: (res: any) => {
          this.router.navigate(['/funcionario/listarManutencao']);
        },
        error: (error: any) => {
          console.error("Erro ao atualizar a peça de roupa:", error);
        }
      });
    }
  }

}
