import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataResolverService } from 'src/app/service/data-resolver.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList:Product[];
  constructor(private dataResolverService:DataResolverService,private router:Router) { }

  ngOnInit(): void {
    this.productList = this.dataResolverService.getDatas();
  }

  onAdd(){
    this.router.navigate(['add']);
  }

}
