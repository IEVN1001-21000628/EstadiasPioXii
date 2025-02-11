import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaProfesoresComponent } from './tarea-profesores.component';

describe('TareaProfesoresComponent', () => {
  let component: TareaProfesoresComponent;
  let fixture: ComponentFixture<TareaProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaProfesoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
