import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { SerachComponent } from './components/serach/serach.component';
import { CalculatorComponent } from './components/calculator/calculator.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SerachComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
