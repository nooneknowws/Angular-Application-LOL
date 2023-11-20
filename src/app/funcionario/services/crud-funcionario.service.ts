import { Usuario } from 'src/app/shared/models/usuario.model';
import { Injectable } from '@angular/core';
import { Manutencao } from 'src/app/shared/models/manutencao.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

const LS_CHAVE_2: string = "Manutencao";


@Injectable({
  providedIn: 'root'
})
export class CrudFuncionarioService {
  private backendURL = 'http://localhost:8081';
  constructor(
    private http: HttpClient
  ) { }
  listarFuncionario(): Observable<Usuario []> {
    return this.http.get<Usuario []>(`${this.backendURL}/funcionarios`);
  }

  inserirFuncionario(funcionario: Usuario ): Observable<any> {

    const url = `${this.backendURL}/funcionarios`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const funcionarioJSON = JSON.stringify(funcionario);

    return this.http.post(url, funcionarioJSON, { headers });
  }

  buscarPorIdFuncionario(id: number): Observable<Usuario >{
    let func = this.http.get<Usuario >(`${this.backendURL}/funcionarios/${id}`);
    return func;
  }

  atualizarFuncionario(funcionario: Usuario ): Observable<any> {
    const url = `${this.backendURL}/funcionarios/${funcionario.id}`;
    return this.http.put(url, funcionario);
  }
  removerFuncionario(funcionario: Usuario ): Observable<any>{

    const url = `${this.backendURL}/funcionarios/${funcionario.id}`
    return this.http.delete(url)

  }





  // CRUD DE MANUTENCAO
  listarManutencao(): Observable<Manutencao []> {
    return this.http.get<Manutencao []>(`${this.backendURL}/roupas`);
  }

  inserirManutencao(manutencao: Manutencao ): Observable<any> {

    const url = `${this.backendURL}/roupas`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const manutencaoJSON = JSON.stringify(manutencao);

    return this.http.post(url, manutencaoJSON, { headers });
  }
  
  buscarPorIdManutencao(id: number): Observable<Manutencao >{
    let manu = this.http.get<Manutencao >(`${this.backendURL}/roupas/${id}`);
    return manu;
  }

  atualizarManutencao(manutencao: Manutencao ): Observable<any> {
    const url = `${this.backendURL}/roupas/${manutencao.id}`;
    return this.http.put(url, manutencao);
  }

}
