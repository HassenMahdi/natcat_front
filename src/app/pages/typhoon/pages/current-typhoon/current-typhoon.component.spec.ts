import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTyphoonComponent } from './current-typhoon.component';

describe('CurrentTyphoonComponent', () => {
  let component: CurrentTyphoonComponent;
  let fixture: ComponentFixture<CurrentTyphoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentTyphoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentTyphoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
