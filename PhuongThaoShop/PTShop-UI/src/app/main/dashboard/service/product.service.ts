import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ResponseDto, ProductDetailDto} from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:5121/api/ProductDetail/PGetProductDetail';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductDetailDto[]> {
    const params = {
    
    };

    return this.http.get<ResponseDto>(this.apiUrl, { params })
      .pipe(map(response => response.result));
  }
}
