import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import { MasterService } from "./master.service";

describe('MasterService with DI', () => {
    
    let service: MasterService;

    //configure module for master service for each of it() test case
    beforeEach(() => {
        TestBed.configureTestingModule({ providers: [UserService] });
    });

    it('should return Hi! from user service injection', () => {
        service = TestBed.get(MasterService);
        expect(service.sayHi()).toBe('Hi!');
    });


});