import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhilosopherService {

  constructor(private http: HttpClient) {}

  getPhilosophers() {
    return this.http.get(`${environment.api}/philosopher`);
  }
}
