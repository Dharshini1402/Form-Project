import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { ServiceService } from "../service.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  myGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceService
  ) {}
  handleSubmit(arg) {
    // console.log(this.myGroup);
    console.log(arg.value);
    this.service
      .postdetail(arg.value)
      .subscribe(result => console.log(result), err => console.log(err));
    this.myGroup.reset();
  }
  ngOnInit() {
    this.myGroup = new FormGroup({
      username: new FormControl("name"),
      mail: new FormControl(""),
      password: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      anotherpassword: this.formBuilder.control("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    {
      validators: this.MustMatch();
    }
  }
  MustMatch() {
    return (form: FormGroup) => {
      const pass = form.controls.password.value;
      const confirm = form.controls.anotherpassword.value;
      console.log(pass, confirm);
      return pass === confirm ? null : { mismatch: true };
    };
  }
}
