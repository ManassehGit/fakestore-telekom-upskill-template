import { Injectable } from '@angular/core';
import { ProductType } from './product-type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartObject } from './cart-object';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: {product: ProductType, quantity: number}[] = [];
  private baseUrl: string = "https://fakestoreapi.com";

  constructor(private http: HttpClient) { }

  addToCart(itemObject: {product: ProductType, quantity: number}){
    this.cartItems.push(itemObject);
    return this.cartItems.length;
  }

  getCartItems():  Observable<CartObject>{
    return this.http.get<CartObject>(`${this.baseUrl}/carts/${1}`);
  }
}
