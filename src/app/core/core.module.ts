import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeComponent } from './time/time.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'


@NgModule({
  declarations: [
    TimeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,//exportvame gi za da mogat da se izpolzvat v app modula(ili ot druga componenta, module)
    FooterComponent
  ]
})
export class CoreModule { }
