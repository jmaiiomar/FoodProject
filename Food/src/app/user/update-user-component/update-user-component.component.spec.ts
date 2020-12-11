import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserComponentComponent } from './update-user-component.component';

describe('UpdateUserComponentComponent', () => {
  let component: UpdateUserComponentComponent;
  let fixture: ComponentFixture<UpdateUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
