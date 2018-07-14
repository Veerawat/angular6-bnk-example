import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BnkGirlListComponent } from './component/bnk-girl-list/bnk-girl-list.component';
import { BnkGirlComponent } from './component/bnk-girl/bnk-girl.component';
import { InstragramComponent } from './component/instragram/instragram.component';
import { InstragramListComponent } from './component/instragram-list/instragram-list.component';
import { InstragramItemComponent } from './component/instragram-item/instragram-item.component';
import { BnkSuffixPipe } from './pipes/bnk-suffix.pipe';

const routes: Route[] = [
  {path: '', pathMatch:'full', redirectTo: '/dashboard'},
  {path: 'dashboard', component: DashboardComponent },
  {path: 'instragram/:id', component: InstragramComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BnkGirlListComponent,
    BnkGirlComponent,
    InstragramComponent,
    InstragramListComponent,
    InstragramItemComponent,
    BnkSuffixPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
