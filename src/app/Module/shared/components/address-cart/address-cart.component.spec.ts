import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressCartComponent } from './address-cart.component';

describe('AddressCartComponent', () => {
  let component: AddressCartComponent;
  let fixture: ComponentFixture<AddressCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressCartComponent]
    });
    fixture = TestBed.createComponent(AddressCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
