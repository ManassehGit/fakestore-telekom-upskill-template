import { Component } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  productsList: ProductType[] = [];
  constructor(private getProductsService: GetProductsService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProductsService.fetchProducts().subscribe((response) => {
      this.productsList = response;
    });
  }
}
