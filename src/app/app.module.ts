import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PhilosopherComponent } from './philosopher/philosopher.component';
import { UserComponent } from './user/user.component';
import { QuoteComponent } from './quote/quote.component';
import { AppRoutingModule } from './app-routing.module';
import { PhilosopherDetailComponent } from './philosopher-detail/philosopher-detail.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PhilosopherComponent,
    UserComponent,
    QuoteComponent,
    PhilosopherDetailComponent,
    QuoteDetailComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
