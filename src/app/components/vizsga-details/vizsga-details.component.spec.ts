import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaDetailsComponent } from './vizsga-details.component';

describe('VizsgaDetailsComponent', () => {
  let component: VizsgaDetailsComponent;
  let fixture: ComponentFixture<VizsgaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizsgaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
