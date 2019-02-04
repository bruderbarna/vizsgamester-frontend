import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaKerdesComponent } from './vizsga-kerdes.component';

describe('VizsgaKerdesComponent', () => {
  let component: VizsgaKerdesComponent;
  let fixture: ComponentFixture<VizsgaKerdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizsgaKerdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgaKerdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
