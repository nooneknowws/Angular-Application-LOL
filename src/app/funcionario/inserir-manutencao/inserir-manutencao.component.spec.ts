import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirManutencaoComponent } from './inserir-manutencao.component';

describe('InserirManutencaoComponent', () => {
  let component: InserirManutencaoComponent;
  let fixture: ComponentFixture<InserirManutencaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirManutencaoComponent]
    });
    fixture = TestBed.createComponent(InserirManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
