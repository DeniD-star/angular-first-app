import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {

  // @Input() userArray: IUser[] = [];
  // @Output() addUser = new EventEmitter<IUser>();

  // constructor() {
  //   console.log(this.userArray);

  // }

  // ngOnInit(): void {
  //   console.log(this.userArray);

  // }

  // ngOnChanges(simpleChanges: SimpleChanges): void {
  //   console.log(simpleChanges);

  // };


  // addNewUser(userNameInput: HTMLInputElement, userAgeInput: HTMLInputElement): void {
  //   const { value: name } = userNameInput;
  //   const { valueAsNumber: age } = userAgeInput;

  //   this.addUser.emit({ name, age });

  //   userNameInput.value = '';
  //   userAgeInput.value = '';
  // }


  users: IUser[] | undefined;

  constructor(public userService: UserService) {
    // a tova koeto izpolzvame tuk e instanziq, toest obekt koito idva ot UserService
  }
  ngOnInit(): void {
    // this.userService.loadUsers().subscribe(users=> this.users = users)
    this.loadUsers();
  }

  loadUsers(search?: string): void {
    this.users = undefined;
    this.userService.loadUsers(search)
    .subscribe(
      (users) => (this.users = users), //next fn
      (error) => console.error(error), //error fn
      () => console.log('Load users stream completed!')//completed
    );
  }
  reloadButtonHandler() {
    this.loadUsers();
  }

  searchButtonHandler(searchInput: HTMLInputElement): void {
    const { value } = searchInput;
    this.loadUsers(value);
  }
}
