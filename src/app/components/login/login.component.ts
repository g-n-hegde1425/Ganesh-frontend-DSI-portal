import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { HttpClient,HttpHeaders  } from "@angular/common/http";
import { userObj } from "./login.module";
import { NgForm } from '@angular/forms';
import configurl from '../../../assets/config/config.json'
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  invalidLogin?: boolean;
  url = configurl.apiServer.url + '/api/Users/authenticate';
  loginForm: any;
  constructor(private router: Router, private http: HttpClient,private jwtHelper : JwtHelperService,
    private toastr: ToastrService) {}
    ngOnInit(): void {}

    public login = (form: NgForm) => {
      const credentials = JSON.stringify(form.value);
      this.http.post(this.url, credentials, {
        headers: new HttpHeaders({
          "Content-Type": "application/json"
        })
      }).subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.toastr.success("Logged In successfully");
        this.router.navigate(["dashboard"]);
      }, err => {
        this.invalidLogin = true;
      });
    }

      // isUserAuthenticated() {
      //   const token = localStorage.getItem("jwt");
      //   if (token && !this.jwtHelper.isTokenExpired(token)) {
      //     return true;
      //   }
      //   else {
      //     return false;
      //   }
      // }

//   userObj:userObj={
//     Email: "",
//     Password: "",
//     UserTypeId: 1
//   }
// Email:string;
// Password:string;

// loginUser():void{
  
//   this.userObj.Email=this.Email;
//   this.userObj.Password=this.Password;
//   this.userObj.UserTypeId=1;
//   // console.log(this.userObj);
//   this.http.post('https://localhost:7186/api/Users/authenticate',this.userObj)
//   .subscribe(responseData=>{
//   if(responseData){
//     // alert("Login Successful");
//     console.log(responseData);
//     this.router.navigate(["dashboard"]);
//   } else{
//     alert("Invalid credentials");
//   }
//   },err=>{
//     alert("Something went wrong");
//   })
// }
  

  // login(): void {
  //   if (this.username == "admin" && this.password == "admin") {
  //     this.router.navigate(["dashboard"]);
  //   } else {
  //     alert("Invalid credentials");
  //   }
  // }
}
