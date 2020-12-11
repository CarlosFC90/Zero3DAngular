import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaHisoDetailsComponent } from './porta-hiso-details.component';

describe('PortaHisoDetailsComponent', () => {
  let component: PortaHisoDetailsComponent;
  let fixture: ComponentFixture<PortaHisoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaHisoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaHisoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
