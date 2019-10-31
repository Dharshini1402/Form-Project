import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  cart = [];
  isAuth = false;
  url = "http://localhost:3000/signup";
  postdetail(arg) {
    return this.http
      .post<any>(this.url, arg)
      .pipe(tap(x => (this.isAuth = true)));
  }
  /* getdata(): Observable<Isignup[]> {
    return this.http.get<Isignup[]>(this.url);
  }*/
}
