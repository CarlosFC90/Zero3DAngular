import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboneDetailsComponent } from './cubone-details.component';

describe('CuboneDetailsComponent', () => {
  let component: CuboneDetailsComponent;
  let fixture: ComponentFixture<CuboneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuboneDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuboneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
