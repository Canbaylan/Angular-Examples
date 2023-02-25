import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUndoneComponent } from './add-undone.component';

describe('AddUndoneComponent', () => {
  let component: AddUndoneComponent;
  let fixture: ComponentFixture<AddUndoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUndoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUndoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
