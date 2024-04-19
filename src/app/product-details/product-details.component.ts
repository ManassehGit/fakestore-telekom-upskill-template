import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsService } from '../get-products.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productId!: string | null;
  productDetails!: ProductType

  constructor(private route: ActivatedRoute, private getProductsService: GetProductsService){}
  
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
}
