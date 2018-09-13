import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhilosopherService} from '../services/philosopher.service';
import {QuoteService} from '../services/quote.service';

@Component({
  selector: 'app-philosopher-detail',
  templateUrl: './philosopher-detail.component.html',
  styleUrls: ['./philosopher-detail.component.css']
})
export class PhilosopherDetailComponent implements OnInit {
  philosopher$: Object;
  quotes$: any;
  philosopherName: String;

  constructor(
    private route: ActivatedRoute,
    private philosopherService: PhilosopherService,
    private quoteService: QuoteService) {
    this.route.params.subscribe(params => this.philosopher$ = params.id);
  }

  ngOnInit() {
    this.philosopherService.getPhilosopher(this.philosopher$).subscribe(
      data => this.philosopher$ = data
    );
  }

  getQuotes(name){
    console.log(`this is the getQuotes by ${name} method`);
    this.quoteService.getQuotesByPhilosopherName(name);
  }

}
