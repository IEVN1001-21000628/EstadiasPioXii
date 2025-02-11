import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoVistaComponent } from './alumno-vista.component';

describe('AlumnoVistaComponent', () => {
  let component: AlumnoVistaComponent;
  let fixture: ComponentFixture<AlumnoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoVistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
