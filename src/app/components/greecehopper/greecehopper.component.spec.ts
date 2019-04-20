import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreecehopperComponent } from './greecehopper.component';

describe('GreecehopperComponent', () => {
  let component: GreecehopperComponent;
  let fixture: ComponentFixture<GreecehopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreecehopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreecehopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
