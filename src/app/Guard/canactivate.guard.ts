import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivate
} from "@angular/router";
import { Observable } from "rxjs";
import { ServiceService } from "../service.service";
@Injectable({
  providedIn: "root"
})
export class CanactivateGuard implements CanActivate {
  constructor(private service: ServiceService, private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.service.isAuth) {
      this.route.navigate(["/"]);
      return;
    }
    return this.service.isAuth;
  }
}
