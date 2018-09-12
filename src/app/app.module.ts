import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PhilosopherComponent } from './philosopher/philosopher.component';
import { UserComponent } from './user/user.component';
import { QuoteComponent } from './quote/quote.component';
import { AppRoutingModule } from './app-routing.module';
import { PhilosopherDetailComponent } from './philosopher-detail/philosopher-detail.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PhilosopherComponent,
    UserComponent,
    QuoteComponent,
    PhilosopherDetailComponent,
    QuoteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
