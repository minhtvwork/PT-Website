import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  inforForm = new FormGroup({
    fullName: new FormControl(''),
    payment: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl(''),
    infor: new FormArray([]),
  });
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
    
  }

  datHang(){
console.log(this.inforForm.value)
  }
}
