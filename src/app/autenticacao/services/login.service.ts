import { Login } from './../../shared/models/login.model';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError, Observable } from 'rxjs';


const LS_CHAVE: string = "usuarioLogado";
@Injectable({
  providedIn: 'root'
})


export class LoginService {
private backendURL = 'http://localhost:8081';

public get usuarioLogado(): Usuario {
  let usu = localStorage[LS_CHAVE];
  return (usu? JSON.parse(localStorage[LS_CHAVE]): null);
}
public set usuarioLogado(usuario: Usuario) {
  localStorage[LS_CHAVE] = JSON.stringify(usuario);
}
logout(){
  delete localStorage[LS_CHAVE]
}
login(login: Login): Observable<Usuario | null> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  return this.http.post<Usuario | null>(`${this.backendURL}/login`, login, { headers })
    .pipe(
      catchError((error: any) => {
        if (error.status === 401) {

          const errorMessage = 'Authentication failed. Invalid email or password.';
          return throwError(errorMessage);
        }

        return throwError('Something went wrong.');
      })
    );
}
  constructor(private http: HttpClient) { }
}
