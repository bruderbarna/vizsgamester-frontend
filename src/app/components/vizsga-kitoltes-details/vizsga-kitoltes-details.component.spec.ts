import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaKitoltesDetailsComponent } from './vizsga-kitoltes-details.component';

describe('VizsgaKitoltesDetailsComponent', () => {
  let component: VizsgaKitoltesDetailsComponent;
  let fixture: ComponentFixture<VizsgaKitoltesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizsgaKitoltesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgaKitoltesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
