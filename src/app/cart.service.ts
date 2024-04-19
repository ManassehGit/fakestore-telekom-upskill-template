import { Injectable } from '@angular/core';
import { ProductType } from './product-type';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: ProductType[] = [];
  constructor() { }

  addToCart(item: ProductType){
    this.cartItems.push(item);
  }

  getCartItems(): ProductType[]{
    return this.cartItems;
  }
}
