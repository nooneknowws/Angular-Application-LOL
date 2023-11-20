import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarManutencaoComponent } from './listar-manutencao.component';

describe('ListarManutencaoComponent', () => {
  let component: ListarManutencaoComponent;
  let fixture: ComponentFixture<ListarManutencaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarManutencaoComponent]
    });
    fixture = TestBed.createComponent(ListarManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
