import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";

@Component({
  selector: "app-user",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UserComponent implements OnInit {
  public getValue:any;
  dataSource:any=[];
  public usersTable:string[]=['firstName','userId','email','phoneNum','userStatus','immigrationStatus','workStatus'];
  constructor(private http:HttpClient) {}

  ngOnInit():void {
    this.getAllUser();
  }
  public getAllUser(){
    this.http.get("https://localhost:7186/api/Users/getAllUsers").subscribe((data)=>{
      console.table(data);
      this.getValue=data;
      this.dataSource=data;
      
    })
  }
}
