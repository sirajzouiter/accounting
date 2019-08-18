import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LeftsideComponent } from './layout/leftside/leftside.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AccountingListComponent } from './business/accounting-list/accounting-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftsideComponent,
    FooterComponent,
    AccountingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
