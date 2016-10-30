/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyEditComponent } from './key-edit.component';

describe('KeyEditComponent', () => {
  let component: KeyEditComponent;
  let fixture: ComponentFixture<KeyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
