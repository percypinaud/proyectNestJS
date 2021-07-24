import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product:Product = {
    name : '',
    code : '',
    status : 1
  };

  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
  }

  guardarProducto(){
    this.productService.createProduct(this.product).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

}
