import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { ProudctResponseModel } from 'src/app/models/productResponseModel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[] = [];
  apiUrl:string = "https://localhost:44353/api/Products/getall";
  constructor(private httpClient:HttpClient){}

    getProducts():Observable<ProudctResponseModel>
    {
       return this.httpClient.get<ProudctResponseModel>(this.apiUrl);
    } 
}
