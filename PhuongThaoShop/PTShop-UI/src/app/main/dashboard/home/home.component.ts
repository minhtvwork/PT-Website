import { Component,OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ProductDetailDto } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductDetailDto[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: ProductDetailDto[]) => {
        this.products = data;
        console.log(this.products)
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
