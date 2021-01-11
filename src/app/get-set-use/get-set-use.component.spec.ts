import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSetUseComponent } from './get-set-use.component';

describe('GetSetUseComponent', () => {
  let component: GetSetUseComponent;
  let fixture: ComponentFixture<GetSetUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSetUseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSetUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
