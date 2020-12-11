import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanterDetailsComponent } from './panter-details.component';

describe('PanterDetailsComponent', () => {
  let component: PanterDetailsComponent;
  let fixture: ComponentFixture<PanterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
