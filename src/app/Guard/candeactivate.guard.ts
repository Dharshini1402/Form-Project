import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { Component } from "@angular/compiler/src/core";
@Injectable({
  providedIn: "root"
})
export class CandeactivateGuard implements CanDeactivate<any> {
  canDeactivate(SignupComponent: Component) {
    return window.confirm("are you sure to navigateto other page");
  }
}
