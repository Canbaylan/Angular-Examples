import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoneComponent } from './undone.component';

describe('UndoneComponent', () => {
  let component: UndoneComponent;
  let fixture: ComponentFixture<UndoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
