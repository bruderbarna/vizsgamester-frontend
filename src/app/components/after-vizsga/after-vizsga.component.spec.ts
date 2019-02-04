import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterVizsgaComponent } from './after-vizsga.component';

describe('AfterVizsgaComponent', () => {
  let component: AfterVizsgaComponent;
  let fixture: ComponentFixture<AfterVizsgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterVizsgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterVizsgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
