import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : any[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    },
    (err) => {
      console.log(err);
    }
    );
  }

}
