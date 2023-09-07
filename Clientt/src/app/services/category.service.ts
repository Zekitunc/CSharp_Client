import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
import { CategoryResponseModel } from '../models/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categorys: Category[] =[];
  apiurl : string = "https://localhost:44353/getall";

  constructor(private httpClient:HttpClient){}
  

    getCategories():Observable <CategoryResponseModel>
    {

      return this.httpClient.get<CategoryResponseModel>(this.apiurl);
    }
   
}


//https://localhost:44353/getall