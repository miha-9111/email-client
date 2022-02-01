import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Email } from "./email";

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  }
}
