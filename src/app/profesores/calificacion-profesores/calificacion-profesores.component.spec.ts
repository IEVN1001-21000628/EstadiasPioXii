import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionProfesoresComponent } from './calificacion-profesores.component';

describe('CalificacionProfesoresComponent', () => {
  let component: CalificacionProfesoresComponent;
  let fixture: ComponentFixture<CalificacionProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalificacionProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalificacionProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
