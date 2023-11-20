import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialFuncionarioComponent } from './inicial-funcionario.component';

describe('InicialFuncionarioComponent', () => {
  let component: InicialFuncionarioComponent;
  let fixture: ComponentFixture<InicialFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialFuncionarioComponent]
    });
    fixture = TestBed.createComponent(InicialFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
