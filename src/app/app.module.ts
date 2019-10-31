import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { CartComponent } from "./cart/cart.component";
import { RouterModule, Router, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CandeactivateGuard } from "./Guard/candeactivate.guard";
import { CanactivateGuard } from "./Guard/canactivate.guard";

const appRoute: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full"
    
  },
  {
    path: "signup",
    component: SignupComponent,
    canDeactivate: [CandeactivateGuard]
  },
  { path: "addcart", component: CartComponent ,canActivate: [CanactivateGuard]}
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
