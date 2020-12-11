import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroguDetailsComponent } from './grogu-details.component';

describe('GroguDetailsComponent', () => {
  let component: GroguDetailsComponent;
  let fixture: ComponentFixture<GroguDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroguDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroguDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
