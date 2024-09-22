import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMomentComponent } from './editar-moment.component';

describe('EditarMomentComponent', () => {
  let component: EditarMomentComponent;
  let fixture: ComponentFixture<EditarMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
