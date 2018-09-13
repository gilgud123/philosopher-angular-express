import { Component, OnInit } from '@angular/core';
import {QuoteService} from '../services/quote.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class QuoteComponent implements OnInit {
  quotes$: Object;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getQuotes().subscribe(
      data => this.quotes$ = data
    );
  }

}
