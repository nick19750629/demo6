import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { OrderComponent } from './order/order.component';

const routeConfig: Routes = [
  {path: 'demo1', component: Demo1Component},
  {path: 'demo2', component: Demo2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
