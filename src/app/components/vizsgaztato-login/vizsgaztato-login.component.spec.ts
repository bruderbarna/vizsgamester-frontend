import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaztatoLoginComponent } from './vizsgaztato-login.component';

describe('VizsgaztatoLoginComponent', () => {
  let component: VizsgaztatoLoginComponent;
  let fixture: ComponentFixture<VizsgaztatoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizsgaztatoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgaztatoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
