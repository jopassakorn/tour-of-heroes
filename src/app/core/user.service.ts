import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserService {

  constructor() { }

  sayHi(){
    return 'Hi!';
  }

  getObservableValue(){
    return of('test');
  }

}
