import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular';
  baslik:string = "ürünler Listesi:"
  product = {productId:1,productName:'bardak',categoryId:1,unitPrice:5}
  product2 = {productId:2,productName:'erik',categoryId:2,unitPrice:4}
  product3 = {productId:3,productName:'kivi',categoryId:3,unitPrice:2}
  product4 = {productId:4,productName:'kanepe',categoryId:4,unitPrice:5000}

  products = [this.product,this.product2,this.product3,this.product4]

  
}
