import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: { get: jasmine.Spy };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService();
  });

  //test service return value
  it('say hi should return Hi!', () => {
    expect(userService.sayHi()).toBe('Hi!');
  })

  //test observable value
  it('observable value should return test', (done: DoneFn) => {
    userService.getObservableValue().subscribe(value => {
      expect(value).toBe('test');
      done();
    });
  });


});
