import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // this is like connetion to database 
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<IProduct[]> 
  {
      return this.http.get<IProduct[]>('https://fakestoreapi.com/products');        
  }

  
}
