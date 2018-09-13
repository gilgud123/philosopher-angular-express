import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {PhilosopherService} from '../services/philosopher.service';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-philosopher',
  templateUrl: './philosopher.component.html',
  styleUrls: ['./philosopher.component.css'],
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
export class PhilosopherComponent implements OnInit {
  philosophers$: Object;

  constructor(private philosopherService: PhilosopherService) { }

  ngOnInit() {
    this.philosopherService.getPhilosophers().subscribe(
      data => this.philosophers$ = data
    );
  }

}
