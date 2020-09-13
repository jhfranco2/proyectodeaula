import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarraComponent } from './appbarra.component';

describe('AppbarraComponent', () => {
  let component: AppbarraComponent;
  let fixture: ComponentFixture<AppbarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
