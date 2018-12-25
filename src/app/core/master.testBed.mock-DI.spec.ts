import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import { MasterService } from "./master.service";

describe('MasterService with mock-DI', () => {
    
    let service: MasterService;
    let userServiceSpy: jasmine.SpyObj<UserService>;

    //configure module for master service for each of it() test case
    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [UserService] });
    });

    it('should reutn Hi from mocked user service injection', () => {
        service = TestBed.get(MasterService);
        expect(service.sayHi()).toBe('Hi!');
    });


});