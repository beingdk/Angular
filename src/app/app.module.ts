import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ environment } from '../environments/environment'

import{ AngularFireModule } from 'angularfire2';
import{ AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { HomeComponent } from './components/home/home.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { AddWithdrawComponent } from './components/add-withdraw/add-withdraw.component';
import { ViewReportsComponent } from './components/view-reports/view-reports.component';
import { MonthlyReturnsComponent } from './components/view-reports/monthly-returns/monthly-returns.component';
import { PnlStatementComponent } from './components/view-reports/pnl-statement/pnl-statement.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';



@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    HomeComponent,
    NewEntryComponent,
    AddWithdrawComponent,
    ViewReportsComponent,
    MonthlyReturnsComponent,
    PnlStatementComponent,
    PageNotfoundComponent,
    NavbarMainComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'firbasedemo'),
    AngularFirestoreModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
