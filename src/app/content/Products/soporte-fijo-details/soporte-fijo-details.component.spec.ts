import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoporteFijoDetailsComponent } from './soporte-fijo-details.component';

describe('SoporteFijoDetailsComponent', () => {
  let component: SoporteFijoDetailsComponent;
  let fixture: ComponentFixture<SoporteFijoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoporteFijoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoporteFijoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
