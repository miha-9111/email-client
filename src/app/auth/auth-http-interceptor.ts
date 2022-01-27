import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { filter, Observable, tap } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true
    });
    return next.handle(modifiedReq);
    // return next.handle(modifiedReq)
    //   .pipe(
    //     filter(val => val.type === HttpEventType.Sent),
    //     tap(val => {
    //       console.log('Sent the request')
    //     })
    //   );
  }
}
