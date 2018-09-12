import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhilosopherComponent } from './philosopher/philosopher.component';
import { UserComponent } from './user/user.component';
import { QuoteComponent } from './quote/quote.component';

const routes: Routes = [
  {
    path: 'philosopher',
    component: PhilosopherComponent
  },
  {
    path: 'quote',
    component: QuoteComponent
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
