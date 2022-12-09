import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newcom2Component } from './newcom2.component';

describe('Newcom2Component', () => {
  let component: Newcom2Component;
  let fixture: ComponentFixture<Newcom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newcom2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Newcom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
