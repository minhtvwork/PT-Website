import { Component, OnInit } from '@angular/core';
import { ProductDetailDto } from '../models/models';
import { ApiService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: ProductDetailDto[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.apiService.getProducts().subscribe(
      (data: ProductDetailDto[]) => {
        this.products = data;
        console.log(this.products)
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }
}
