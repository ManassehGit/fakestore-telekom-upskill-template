import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartObject } from '../cart-object';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
  cartItemsList!: CartObject;

  constructor(private cartService: CartService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this.cartService.getCartItems().subscribe(cartItems => {
        this.cartItemsList = cartItems;
      });
  }
}
