import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVizsgaztatoInvitacioComponent } from './admin-vizsgaztato-invitacio.component';

describe('AdminVizsgaztatoInvitacioComponent', () => {
  let component: AdminVizsgaztatoInvitacioComponent;
  let fixture: ComponentFixture<AdminVizsgaztatoInvitacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVizsgaztatoInvitacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVizsgaztatoInvitacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
