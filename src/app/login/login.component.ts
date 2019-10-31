import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  handleSubmit(arg) {
    console.log(arg);
  }
  handleNav() {
    this.route.navigate(["/signup"]);
  }
  constructor(private route: Router) {}

  ngOnInit() {}
}
