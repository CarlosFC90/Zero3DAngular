import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StitchDetailsComponent } from './stitch-details.component';

describe('StitchDetailsComponent', () => {
  let component: StitchDetailsComponent;
  let fixture: ComponentFixture<StitchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StitchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StitchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
