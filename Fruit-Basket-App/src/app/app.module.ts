import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {progressBar:true, closeButton:true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
