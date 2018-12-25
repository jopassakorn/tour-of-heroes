import { TestBed } from "@angular/core/testing";
import { UserService } from "./user.service";
import { MasterService } from "./master.service";

function setup() {
    const userServiceSpy = jasmine.createSpyObj('UserService', ['sayHi']);
    const stubValue = 'stub value';
    const masterService = new MasterService(userServiceSpy);

    userServiceSpy.sayHi.and.returnValue(stubValue);
    return { masterService, stubValue, userServiceSpy };
}

describe('MasterService with mock-DI', () => {

    it('should reutn Hi from mocked user service injection', () => {

        const { masterService, stubValue, userServiceSpy} = setup();

        expect(masterService.sayHi()).toBe(stubValue, 'service say hi');
        expect(userServiceSpy.sayHi.calls.count()).toBe(1, 'spy method was called once');
        expect(userServiceSpy.sayHi.calls.mostRecent().returnValue).toBe(stubValue);
    });


});