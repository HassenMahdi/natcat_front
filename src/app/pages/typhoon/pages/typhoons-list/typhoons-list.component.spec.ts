import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyphoonsListComponent } from './typhoons-list.component';

describe('TyphoonsListComponent', () => {
  let component: TyphoonsListComponent;
  let fixture: ComponentFixture<TyphoonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyphoonsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyphoonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
