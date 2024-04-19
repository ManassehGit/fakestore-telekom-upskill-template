import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../get-products.service';
import { ProductType } from '../product-type';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId!: string | null;
  productDetails!: ProductType;
  orderQuantity: number = 0;

  constructor(private route: ActivatedRoute, private getProductsService: GetProductsService, private cartService: CartService){}
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params => {
      this.productId = params.get("id");

      if(this.productId){
        this.getProductsService.fetchProductDetails(+this.productId).subscribe((response) => {
          this.productDetails = response;
        });
      }
    })
  }

  decreaseQuantity(): void {
    if(this.orderQuantity > 0) {
      this.orderQuantity -= 1;
    }
  }

  increaseQuantity(): void {
    this.orderQuantity += 1;
  }

  addToCart(item: ProductType): void {
    if(this.orderQuantity){
      let cartLength = this.cartService.addToCart({product: item, quantity: this.orderQuantity});
      this.orderQuantity = 0;
      alert("There are " + cartLength + " items in the cart now");
    }
  }
}
