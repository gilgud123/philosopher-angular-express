import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private http: HttpClient) {}

  getQuotes() {
    return this.http.get(`${environment.api}/quote`);
  }

  getQuotesByPhilosopherName(name) {
    return this.http.get(`${environment.api}/quote/philosopher/${name}`);
  }
}
