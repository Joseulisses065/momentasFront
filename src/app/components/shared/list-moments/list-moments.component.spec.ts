import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMomentsComponent } from './list-moments.component';

describe('ListMomentsComponent', () => {
  let component: ListMomentsComponent;
  let fixture: ComponentFixture<ListMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMomentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
