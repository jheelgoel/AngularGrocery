import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { GroceryComponent } from './app.grocery';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent,
    GroceryComponent
  ],
  
  bootstrap: [AppComponent , GroceryComponent],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  
})
export class AppModule { 
  
}
