import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyphoonDetailsComponent } from './typhoon-details.component';

describe('TyphoonDetailsComponent', () => {
  let component: TyphoonDetailsComponent;
  let fixture: ComponentFixture<TyphoonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyphoonDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyphoonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
