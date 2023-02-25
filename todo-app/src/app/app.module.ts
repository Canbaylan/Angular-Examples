import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUndoneComponent } from './components/add-undone/add-undone.component';
import { DoneComponent } from './components/done/done.component';
import { HomeComponent } from './components/home/home.component';
import { UndoneComponent } from './components/undone/undone.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUndoneComponent,
    DoneComponent,
    HomeComponent,
    UndoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
