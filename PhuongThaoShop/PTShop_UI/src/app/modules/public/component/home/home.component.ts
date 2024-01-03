import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../../../service/product.service';
import { ProductDetailDto } from '../../../../Model/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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
