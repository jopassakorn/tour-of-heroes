import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AuthInterceptor } from './auth-interceptor';
import { HttpRequest, HttpClient, HttpHeaders } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Data } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';


describe('auth interceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpInterceptor: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });

    httpInterceptor = new AuthInterceptor(null, null);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('header must have authorization', (done) => {
    
    //create handler request 
    const next: any = {
      handle: (request: HttpRequest<any>) => {
        expect(request.headers.has('Authorization')).toBeTruthy();
        expect(request.headers.get('Authorization')).toEqual('Bearer token');
        return of({ hello: 'world' });
      }
    };

    // create req
    const req = new HttpRequest<any>('GET', '/data');

    httpInterceptor.intercept(req,next).subscribe(obj => done());

  });

  it('header with skip auth must not have authorization header ', (done) => {

    //create handler request 
    const next: any = {
      handle: (request: HttpRequest<any>) => {
        expect(request.headers.has('Authorization')).toBeFalsy();
        return of({ hello: 'world' });
      }
    };

    // create req
    const skipAuthReq = new HttpRequest<any>('GET', '/data', {headers: new HttpHeaders({'SkipAuth':'1'}) });

    httpInterceptor.intercept(skipAuthReq,next).subscribe(obj => done());
  })
  
});
