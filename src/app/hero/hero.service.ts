import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private baseUrl = '/api/hero';

  constructor(private http: HttpClient) { }

  getHeroes(){
    return this.http.get(this.baseUrl + '/getHeros');
  }
}
