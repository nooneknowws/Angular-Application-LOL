import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './autenticacao/services/login.service';
import { Usuario } from './shared/models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabalho-web2';
  componenteAtivo: string;
  constructor(private router: Router,
    private loginService: LoginService) {
    this.componenteAtivo = ''

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const routeSegments = event.url.split('/');
        this.componenteAtivo = routeSegments[routeSegments.length - 1];
      }
      console.log(this.componenteAtivo);
    });
  }
  get usuarioLogado(): Usuario | null {
    return this.loginService.usuarioLogado;
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['autenticacao/login'])
  }
}
