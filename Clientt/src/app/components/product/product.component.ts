import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProudctResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  baslik:string = "ürünler Listesi:"
  dataLoaded:boolean = false;
  products:Product[] = [];
  constructor(private productService:ProductService){

  }

  ngOnInit (): void{
   this.getProducts();
  }

   getProducts(){
     this.productService.getProducts().subscribe(response =>
      {this.products = response.data;
    this.dataLoaded = true;})
   } 
   
}
