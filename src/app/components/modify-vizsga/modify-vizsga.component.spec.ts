import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyVizsgaComponent } from './modify-vizsga.component';

describe('ModifyVizsgaComponent', () => {
  let component: ModifyVizsgaComponent;
  let fixture: ComponentFixture<ModifyVizsgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyVizsgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyVizsgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
