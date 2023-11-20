import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private backendURL = 'http://localhost:8081';

  constructor(
    private http: HttpClient
  ) { }
  inserirCliente(cliente: Usuario): Observable<any> {
    const url = `${this.backendURL}/clientes`;
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    const clienteJSON = JSON.stringify(cliente);

    return this.http.post(url, clienteJSON, { headers });
  }
}
