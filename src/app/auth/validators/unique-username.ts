import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
import { AsyncValidator, FormControl } from "@angular/forms";
import { catchError, map, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {

  constructor(private authService: AuthService) {}

  validate = (control: FormControl) => {
    const { value } = control;

    return this.authService.usernameAvailable(value)
      .pipe(
        map(value => {
          if (value.available) {
            return null;
          }
        }),
        catchError(err => {
          console.log(err);
          if (err.error.username) {
            return of({ nonUniqueUsername: true })
          } else {
            return of({noConnection: true});
          }
        })
      );
  };
}
