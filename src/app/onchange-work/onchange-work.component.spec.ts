import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeWorkComponent } from './onchange-work.component';

describe('OnchangeWorkComponent', () => {
  let component: OnchangeWorkComponent;
  let fixture: ComponentFixture<OnchangeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnchangeWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
