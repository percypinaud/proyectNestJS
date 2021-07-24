import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  BASE_URL:string = "http://localhost:3000";

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>(this.BASE_URL+'/products');
  }

  getProduct(id:string):Observable<Product>{
    return this._http.get<Product>(this.BASE_URL+'/products?id='+id);
  }

  createProduct(product:Product):Observable<Product>{
    return this._http.post<Product>(this.BASE_URL+'/products',product);
  }

  updateProduct(id:string,product:Product):Observable<Product>{
    return this._http.put<Product>(this.BASE_URL+'/products?id='+id,product);
  }

  deleteProduct(id:string):Observable<Product>{
    return this._http.delete<Product>(this.BASE_URL+'/products?id='+id);
  }
}
