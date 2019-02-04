import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreVizsgaComponent } from './pre-vizsga.component';

describe('PreVizsgaComponent', () => {
  let component: PreVizsgaComponent;
  let fixture: ComponentFixture<PreVizsgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreVizsgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreVizsgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
