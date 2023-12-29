import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent, SuccessCheckoutComponent } from './cart.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('CartComponent', () => {
  let component: CartComponent;
  let component2: SuccessCheckoutComponent;
  let fixture: ComponentFixture<CartComponent>;
  let fixture2: ComponentFixture<SuccessCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatDialogModule],
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    fixture2 = TestBed.createComponent(SuccessCheckoutComponent);
    component = fixture.componentInstance;
    component2 = fixture2.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('calculate total price',()=>{
    component.getTotalPrice()
  })
  it('open checkout confirm dialog',()=>{
    component.openDialog()
  })

  it('close checkout confirm dialog',()=>{
    component2.closeModal()
  })
});
