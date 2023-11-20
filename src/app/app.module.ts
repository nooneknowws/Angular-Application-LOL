import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FuncionarioModule } from './funcionario/funcionario.module';
import { ClienteModule } from './cliente/cliente.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';

import { RouterModule } from '@angular/router';
import { RelatorioModule } from './relatorio/relatorio.module';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    FuncionarioModule,
    ClienteModule,
    AutenticacaoModule,
    RelatorioModule,

    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
