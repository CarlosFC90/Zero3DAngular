import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteMultiDetailsComponent } from './soporte-multi-details.component';

describe('SoporteMultiDetailsComponent', () => {
  let component: SoporteMultiDetailsComponent;
  let fixture: ComponentFixture<SoporteMultiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteMultiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteMultiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
