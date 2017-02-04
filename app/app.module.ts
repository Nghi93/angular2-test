import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule }    from '@angular/http';

import { ManagerComponent }  from './manager.component';
import { AppComponent } from './app.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [ AppComponent, ManagerComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ]
})
export class AppModule { }
