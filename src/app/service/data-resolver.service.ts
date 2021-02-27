import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService {

  productList = [
    {
    productId : 'A1',
    productName:'AAA',
    productDescription:'Prod Desc1'
  },
  {
    productId : 'A2',
    productName:'AAA',
    productDescription:'Prod Desc2'
  },
  {
    productId : 'A3',
    productName:'AAA',
    productDescription:'Prod Desc3'
  }
];

  constructor() { }

  getDatas(){
    return this.productList;
  }

  getDataByProductid(id){
    return this.productList.find(prod=>prod.productId === id);
  }

  addProduct(product){
    this.productList.push(product);
  }

  editProduct(product,productId){    
   const index = this.productList.findIndex(prod=>prod.productId === productId);
   this.productList.splice(index,1,product);
  }

  deleteProduct(productId){
    const index = this.productList.findIndex(prod=>prod.productId === productId);
    this.productList.splice(index,1);
  }
}
