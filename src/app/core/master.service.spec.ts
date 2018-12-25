import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { UserService } from './user.service';

/* test service injection in constructor */ 
describe('MasterService', () => {
  // beforeEach(() => TestBed.configureTestingModule({}));
  let masterService: MasterService;

  it('should be created', () => {
    masterService = new MasterService(new UserService());
    expect(masterService).toBeTruthy();
  });

  it('#say hi should return Hi!',() => {+
    expect(masterService.sayHi()).toBe('Hi!');
  });

  //mock service
  it('#getValue should return faked value from a fakeService', () => {
    const fake =  { sayHi: () => 'faked value' };
    masterService = new MasterService(fake as UserService);
    expect(masterService.sayHi()).toBe('faked value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const userServiceSpy = jasmine.createSpyObj('UserService', ['sayHi']);
 
    // set the value to return when the `getValue` spy is called.
    const stubValue = 'Hi From Spy!';
    userServiceSpy.sayHi.and.returnValue(stubValue);

    masterService = new MasterService(userServiceSpy);

    //test mock service
    expect(masterService.sayHi()).toBe(stubValue, 'Hi From Spy!');

    //test method call times in mock service
    expect(userServiceSpy.sayHi.calls.count()).toBe(1, 'spy method was called once');

    //test last return value in mock service
    expect(userServiceSpy.sayHi.calls.mostRecent().returnValue).toBe(stubValue);

  });
});
