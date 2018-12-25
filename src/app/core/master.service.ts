import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private userService: UserService) { }

  sayHi(){
    return this.userService.sayHi();
  }

}
