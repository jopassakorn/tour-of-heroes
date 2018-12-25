import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { AuthInterceptor } from './auth-interceptor';
import { HttpRequest, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Data } from '@angular/router';


describe('auth interceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  // it('can test HttpClient.get', () => {
  
  //   // Make an HTTP GET request
  //   httpClient.get('http://localhost:8090/e-payment-web/registerController/test')
  //     .subscribe(data =>
  //       // When observable resolves, result should match test data
  //       expect(data).toEqual("test")
  //     );
  
  //   // The following `expectOne()` will match the request's URL.
  //   // If no requests or multiple requests matched that URL
  //   // `expectOne()` would throw.
  //   // Expect one request with an authorization header
  //   const req = httpTestingController.expectOne(
  //     req => req.headers.has('Authorization')
  //   );
  
  //   // Assert that the request is a GET.
  //   expect(req.request.method).toEqual('GET');
  
  //   // Respond with mock data, causing Observable to resolve.
  //   // Subscribe callback asserts that correct data was returned.
  //   req.flush("test");
  
  //   // Finally, assert that there are no outstanding requests.
  //   httpTestingController.verify();
  // });
  
});
