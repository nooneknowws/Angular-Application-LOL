import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioService } from './services/relatorio.service';
import { SelecionarRelatorioComponent } from './selecionar-relatorio/selecionar-relatorio.component';
import { RouterModule } from '@angular/router';
import { RelatorioClienteComponent } from './relatorio-cliente/relatorio-cliente.component';
import { RelatorioClienteFielComponent } from './relatorio-cliente-fiel/relatorio-cliente-fiel.component';
import { RelatorioReceitaComponent } from './relatorio-receita/relatorio-receita.component';


@NgModule({
  declarations: [
    SelecionarRelatorioComponent,
    RelatorioClienteComponent,
    RelatorioClienteFielComponent,
    RelatorioReceitaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[
    RelatorioService
  ]
})
export class RelatorioModule { }
