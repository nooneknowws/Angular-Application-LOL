import { Component } from '@angular/core';
import { CrudFuncionarioService } from '../services/crud-funcionario.service';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-manutencao',
  templateUrl: './listar-manutencao.component.html',
  styleUrls: ['./listar-manutencao.component.css']
})
export class ListarManutencaoComponent{

  manutencao: Manutencao[] = [];

  constructor(private manutencaoService : CrudFuncionarioService) {}

  ngOnInit(): void {
    this.listarManutencao().subscribe(
      manutencao => {
        this.manutencao = manutencao;
      },
      error => {
        console.error('Error',error);
      }
    );
    }


  listarManutencao(): Observable<Manutencao[]> {
    return this.manutencaoService.listarManutencao();
  }
}
