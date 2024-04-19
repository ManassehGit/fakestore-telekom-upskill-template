import { Component, Input } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() itemId!: number;
  productDetails!: ProductType;

  constructor(private getProductsService: GetProductsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.itemId){
      this.getProductsService.fetchProductDetails(+this.itemId).subscribe((response) => {
        this.productDetails = response;
      });
    }
  }
}
