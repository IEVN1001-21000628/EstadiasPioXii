import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAdministradorComponent } from './alumnos-administrador.component';

describe('AlumnosAdministradorComponent', () => {
  let component: AlumnosAdministradorComponent;
  let fixture: ComponentFixture<AlumnosAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnosAdministradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
