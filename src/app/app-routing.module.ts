import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhilosopherComponent } from './philosopher/philosopher.component';
import { UserComponent } from './user/user.component';
import { QuoteComponent } from './quote/quote.component';
import { PhilosopherDetailComponent } from './philosopher-detail/philosopher-detail.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';

const routes: Routes = [
  {
    path: 'philosopher',
    component: PhilosopherComponent
  },
  {
    path: 'philosopher/:id',
    component: PhilosopherDetailComponent
  },
  {
    path: 'quote',
    component: QuoteComponent
  },
  {
    path: 'quote/:id',
    component: QuoteDetailComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
