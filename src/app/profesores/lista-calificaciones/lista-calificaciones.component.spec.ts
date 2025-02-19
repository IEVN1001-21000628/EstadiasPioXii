import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCalificacionesComponent } from './lista-calificaciones.component';

describe('ListaCalificacionesComponent', () => {
  let component: ListaCalificacionesComponent;
  let fixture: ComponentFixture<ListaCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCalificacionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
