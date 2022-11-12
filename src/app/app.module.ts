import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserService
    }
  ],//providers se otnasq za konfiguraciqta , v dependency injection mecanisma, toest ne6tata koito iskame da izpolzvame i na drugo mqsto gi dobavqme v providers, oba4e samo otgore nadolu po durvoto
  bootstrap: [AppComponent]
})
export class AppModule { }
