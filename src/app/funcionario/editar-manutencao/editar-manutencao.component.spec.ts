import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarManutencaoComponent } from './editar-manutencao.component';

describe('EditarManutencaoComponent', () => {
  let component: EditarManutencaoComponent;
  let fixture: ComponentFixture<EditarManutencaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarManutencaoComponent]
    });
    fixture = TestBed.createComponent(EditarManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
