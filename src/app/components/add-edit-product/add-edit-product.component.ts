import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { tap } from 'rxjs/operators';
import { DataResolverService } from 'src/app/service/data-resolver.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {
  productForm;
  productDetail:Product;
  productId;
  constructor(private fb:FormBuilder,private route:ActivatedRoute, private data:DataResolverService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.pipe(tap(params=>this.productId = params.id )).subscribe();
    this.productForm = this.fb.group({
      productName:['',[Validators.required]],
      productDescription:['',[Validators.required]]
    })
    if(this.productId){
      this.productDetail = this.data.getDataByProductid(this.productId);      
      this.editProduct();
    }  
  }

  editProduct(){
    this.productForm.patchValue(
      {
        productName:this.productDetail.productName,
        productDescription:this.productDetail.productDescription
      }
    )
  }

  onAdd(){
    const productId = this.generateProductId();
    let product = {productId,...this.productForm.value};    
    this.data.addProduct(product);
    this.router.navigate(['product-list']);
  }

  onEdit(){
    const product = {productId:this.productId,...this.productForm.value};    
    this.data.editProduct(product,this.productId);
    this.router.navigate(['product-list']);
  }

  onCancel(){
    this.router.navigate(['product-list']);
  }

  generateProductId(){
    return (Math.round(Math.random()*1000)).toString();
  }
}
