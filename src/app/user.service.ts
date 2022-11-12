import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { myStringInjectionToken } from './app.module';
import { IUser } from './interfaces/user';

@Injectable(
//   {
//   providedIn: 'root'//ozna4ava 4e tozi service 6te e dostupem v cqloto prilojenie
// }
)
export class UserService {

  // users = [
  //   {
  //     name: 'Ivan 1',
  //     age: 21,
  //   },
  //   {
  //     name: 'Ivan 2',
  //     age: 22,
  //   },
  //   {
  //     name: 'Ivan 3',
  //     age: 23,
  //   },
  // ];

  // constructor(@Inject(myStringInjectionToken) myString: string) {
  //   console.log(myString);

  // }



  // addNewUserHandler(newUser: IUser): void {
  //  this.users = this.users.concat(newUser);
  // }

  // ngOnDestroy(): void{
  //   //v servisa moje da su6testvuva samo tozi lifesicle method, ako go ima tuk sutvetno tova koeto e vilo deklarirano v providers na edna componenta, pri neinoto uni6tojenie, servisa i toi 6te bude uni6tojen,
  //   //a ako providers sa na nivo module, tova suotvetno nqma da bude izvikano i nqma da e neobhodimo
  // }

  constructor(private http: HttpClient){}

  loadUsers(search: string = ''){// ako ne e provaidnato 6te e prazen string
    const query = search ? `?email_like=${search}` : '';
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users${query}`)//s <IUser[]> kazvame 4e tova koeto 6te vurne zaqvkata e edin spisuk ot potrebiteli
  }
}
