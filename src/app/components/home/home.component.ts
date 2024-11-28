import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product.interface';
import { ProductComponent } from "../product/product.component";
import { Observable, tap } from 'rxjs';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductComponent, ReactiveFormsModule, FormsModule,MatSelectModule,MatFormFieldModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService){  
    this.products$ = productService.getProducts().pipe(tap((data) => {
      // opt = new FormControl(this.categories);
      // const categryArr: string[] = []
      data.forEach((item) => {
        if(!this.categoryArr.includes(item.category)) {
          this.categoryArr.push(item.category)
        }
      });
      this.categories = this.categoryArr;
      console.log(this.categories);      
    }))    
  }  

  public categoryArr: string[] = [];
  
  public products$: Observable<IProduct[]>

  public categories: Array<string> = []
  

  ngOnInit() {    
    
  }
  onSelectValueChange(data:any) {
    console.log(data)
    this.products$ = this.productService.getProducts().pipe(tap((productss) => {
      productss.filter((item) => {(!data.includes(item.category))});    
    })) 
}
}


// this.products$ = productService.getProducts().pipe(tap(data => {
//   data.forEach(item => {
//     this.cat.add(item['category'])
//   })
// }))    
// console.log(this.cat)


 