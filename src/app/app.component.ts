import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 3;

  // users = [
  //   { name: 'Ivan 1',
  //    age: 21 },
  //   {
  //     name: 'Ivan 2',
  //     age: 22,
  //   },
  //   {
  //     name: 'Ivan 3',
  //     age: 23,
  //   },
  // ];
  // changeTitle(): void {
  //   // this.title ++;
  //   const current = this.title++;

  //   this.users.push({
  //     name: `Ivan ${current}`,
  //     age: 20 + current
  //   })
  // }


  showText = true;
  toggleText(): void{
    this.showText = !this.showText;
  }


}
