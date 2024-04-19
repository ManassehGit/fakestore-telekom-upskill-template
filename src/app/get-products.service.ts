import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductType } from './product-type';

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private baseUrl: string = "https://fakestoreapi.com";

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`${this.baseUrl}/products`);
  }

  fetchProductDetails(id: number): Observable<ProductType>{
    return this.http.get<ProductType>(`${this.baseUrl}/products/${id}`);
  }
}

