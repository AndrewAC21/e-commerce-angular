import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  @Input() product!: Product;
  ngOnInit(): void {}
}
