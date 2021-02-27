import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { DataResolverService } from 'src/app/service/data-resolver.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() product:Product;
  constructor(private router:Router,private dataResolverService:DataResolverService) { }

  ngOnInit(): void {
  }

  onEdit(id){
    this.router.navigate(['edit',id]);
  }

  onDelete(id){
    this.dataResolverService.deleteProduct(id);
  }
}
