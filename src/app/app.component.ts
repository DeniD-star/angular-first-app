import { Component } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
//ako e public 6te bude dostupno i vuv html file(view)
constructor(public userService: UserService){

}
}
