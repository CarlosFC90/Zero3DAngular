import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizadorDetailsComponent } from './organizador-details.component';

describe('OrganizadorDetailsComponent', () => {
  let component: OrganizadorDetailsComponent;
  let fixture: ComponentFixture<OrganizadorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizadorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizadorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
