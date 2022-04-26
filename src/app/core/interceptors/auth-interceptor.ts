import {
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem('token');

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', idToken),
      });

      return next.handle(cloned);
    } else {
      const cloned = req.clone({
        url: req.url.replace('', ''),
      });

      return next.handle(cloned);
    }
  }
}
