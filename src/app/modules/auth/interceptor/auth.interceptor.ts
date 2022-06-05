import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SessionsService } from 'src/app/services/sessions.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private sessionsService: SessionsService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.sessionsService.authToken;
    let request = req;
    if (authToken) {
      request = req.clone({
        setHeaders: { Authorization: authToken }
      });
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.sessionsService.clearAuthToken();
          this.router.navigateByUrl('/login');
        }
        return throwError(err);
      })
    );
  }
}