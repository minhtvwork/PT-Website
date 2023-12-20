// app.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiBaseUrl = 'https://localhost:44329';

  constructor(private http: HttpClient) {}

//Read
  getData(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/WeatherForecast`);
  }

  // Create
  createData(data: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/endpoint`, data);
  }

  // Update
  updateData(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiBaseUrl}/endpoint/${id}`, data);
  }

  // Delete
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/endpoint/${id}`);
  }
}
