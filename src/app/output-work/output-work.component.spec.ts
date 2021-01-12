import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputWorkComponent } from './output-work.component';

describe('OutputWorkComponent', () => {
  let component: OutputWorkComponent;
  let fixture: ComponentFixture<OutputWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
