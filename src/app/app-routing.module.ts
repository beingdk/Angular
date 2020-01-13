import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewEntryComponent } from './components/new-entry/new-entry.component';
import { AddWithdrawComponent } from './components/add-withdraw/add-withdraw.component';
import { ViewReportsComponent } from './components/view-reports/view-reports.component';
import { ItemsComponent } from './components/items/items.component';
import { PageNotfoundComponent } from './components/page-notfound/page-notfound.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent ,data: { title: 'Home' }},
  { path: 'new-entry', component: NewEntryComponent ,data: { title: 'New Entry' } },
  { path: 'add-withdraw', component: AddWithdrawComponent ,data: { title: 'Add/Withdraw Funds' } },
  { path: 'view-reports', component: ViewReportsComponent ,data: { title: 'View Reports' } },
  { path: 'testing',      component: ItemsComponent ,data: { title: 'Testing' } },

  { path: '',
    redirectTo: '/testing',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }