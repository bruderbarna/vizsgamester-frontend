import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVizsgaComponent } from './create-vizsga.component';

describe('CreateVizsgaComponent', () => {
  let component: CreateVizsgaComponent;
  let fixture: ComponentFixture<CreateVizsgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateVizsgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVizsgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
