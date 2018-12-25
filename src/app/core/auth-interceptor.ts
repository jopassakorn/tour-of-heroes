import { Injectable, Injector} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import { catchError, switchMap, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor( private injector: Injector, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler)
  : Observable<HttpEvent<any>> {
    let headers = req.headers;
    const skip = headers.get('SkipAuth');
    headers = headers.delete('SkipAuth');
    // push req-url to progress service so app component will show progress bar
    if (skip !== '1') {
      headers = headers.set('Authorization', 'Bearer token');
      const authReq = req.clone({ headers });
      return next.handle(authReq);
    } else {
      const newAuthReq = req.clone({ headers });
      return next.handle(newAuthReq);
    }
  }

}
