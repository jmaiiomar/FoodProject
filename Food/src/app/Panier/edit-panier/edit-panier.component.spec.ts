import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPanierComponent } from './edit-panier.component';

describe('EditPanierComponent', () => {
  let component: EditPanierComponent;
  let fixture: ComponentFixture<EditPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
