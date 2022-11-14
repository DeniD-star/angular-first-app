import { Inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserModule } from './user/user.module';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';



export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AboutComponent,

  ],
  imports: [//importvame si module , ne componentata
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    UserModule,
    AppRoutingModule//s tova, tutovete sa ve4e configurirani i mogat da se izpolzvat
  ],
  providers: [
    //tova e injection containera, tuk se suzdavat ne6tata koito da budat injectnati, i suotvetno ako sa poiskani ot drugi komponenti, i te da gi polzvat, i tam kudeto imame useClass: userService, komponentata koeto 6te go poiska da moje da suzdade istanciq na tozi klass
    // {
    //   provide: UserService,
    //   useClass: UserService
    // },
    UserService,//equivalente ello scritto sopra
    {
      provide: myStringInjectionToken,
      useValue: 'HELLO WORLD!'
    }

  ],//providers se otnasq za konfiguraciqta , v dependency injection mecanisma, toest ne6tata koito iskame da izpolzvame i na drugo mqsto gi dobavqme v providers, oba4e samo otgore nadolu po durvoto
  bootstrap: [AppComponent]
})
export class AppModule { }
