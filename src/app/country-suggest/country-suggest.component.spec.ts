/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CountrySuggestComponent } from './country-suggest.component';

describe('CountrySuggestComponent', () => {
  let component: CountrySuggestComponent;
  let fixture: ComponentFixture<CountrySuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
