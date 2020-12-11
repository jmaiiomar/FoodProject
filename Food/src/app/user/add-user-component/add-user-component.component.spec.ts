import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponentComponent } from './add-user-component.component';

describe('AddUserComponentComponent', () => {
  let component: AddUserComponentComponent;
  let fixture: ComponentFixture<AddUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
