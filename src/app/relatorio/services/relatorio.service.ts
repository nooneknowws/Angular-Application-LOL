import { Injectable } from '@angular/core';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RelatorioService {
  private backendURL = 'http://localhost:8081';
  constructor(private router: Router, private http: HttpClient) { }

  getClientes(): Observable<Usuario[]>{
    return this.http.get<Usuario []>(`${this.backendURL}/funcionarios`);
  }
  generateClientePDF() {
    this.router.navigate(['relatorio/relatorioCliente']);

    setTimeout(() => {
      const doc = new jspdf.jsPDF();
      const htmlElement = document.getElementById('conteudo-para-pdf');
      (doc as any).autoTable({ html: htmlElement });
      doc.save('documento.pdf');
    }, 1000);
  }

  generateClientesFieisPDF() {
    this.router.navigate(['relatorio/relatorioFiel']);

    setTimeout(() => {
      const doc = new jspdf.jsPDF();
      const htmlElement = document.getElementById('conteudo-para-pdf');
      (doc as any).autoTable({ html: htmlElement });
      doc.save('documento.pdf');
    }, 1000);
  }

  generateReceitasPDF() {
    this.router.navigate(['relatorio/relatorioReceita']);

    setTimeout(() => {
      const doc = new jspdf.jsPDF();
      const htmlElement = document.getElementById('conteudo-para-pdf');
      (doc as any).autoTable({ html: htmlElement });
      doc.save('documento.pdf');
    }, 1000);
  }

}
