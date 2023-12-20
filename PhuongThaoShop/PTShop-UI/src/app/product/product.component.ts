// product.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.apiService.getData().subscribe((result) => {
      this.data = result;
    });
  }

  createData() {
    const newData = { /* Dữ liệu mới cần tạo */ };
    this.apiService.createData(newData).subscribe((result) => {
      console.log('Data created:', result);
      this.loadData();
    });
  }

  updateData(id: number) {
    const updatedData = { /* Dữ liệu cần cập nhật */ };
    this.apiService.updateData(id, updatedData).subscribe((result) => {
      console.log('Data updated:', result);
      this.loadData();
    });
  }

  deleteData(id: number) {
    this.apiService.deleteData(id).subscribe((result) => {
      console.log('Data deleted:', result);
      this.loadData();
    });
  }
}
