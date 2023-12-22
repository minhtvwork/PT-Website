import { Component } from '@angular/core'
import { LoginRequestDto } from 'src/app/Models/models';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  mai: LoginRequestDto = {
  username: '',
  password: ''
  };
 username : string = '';
 password : string = '';
constructor() {
  
}
   login(): void {
 console.log('hi'+ this.mai.password )
 
}
}
