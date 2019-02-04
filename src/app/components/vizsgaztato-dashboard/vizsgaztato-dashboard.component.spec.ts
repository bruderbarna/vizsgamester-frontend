import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaztatoDashboardComponent } from './vizsgaztato-dashboard.component';

describe('VizsgaztatoDashboardComponent', () => {
  let component: VizsgaztatoDashboardComponent;
  let fixture: ComponentFixture<VizsgaztatoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizsgaztatoDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgaztatoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
