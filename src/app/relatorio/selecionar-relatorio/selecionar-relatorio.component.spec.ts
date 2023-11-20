import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SelecionarRelatorioComponent } from './selecionar-relatorio.component';

describe('SelecionarRelatorioComponent', () => {
  let component: SelecionarRelatorioComponent;
  let fixture: ComponentFixture<SelecionarRelatorioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionarRelatorioComponent]
    });
    fixture = TestBed.createComponent(SelecionarRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
