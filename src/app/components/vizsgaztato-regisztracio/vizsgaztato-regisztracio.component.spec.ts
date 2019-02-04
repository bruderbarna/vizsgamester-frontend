import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizsgaztatoRegisztracioComponent } from './vizsgaztato-regisztracio.component';

describe('VizsgaztatoRegisztracioComponent', () => {
  let component: VizsgaztatoRegisztracioComponent;
  let fixture: ComponentFixture<VizsgaztatoRegisztracioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizsgaztatoRegisztracioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizsgaztatoRegisztracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
