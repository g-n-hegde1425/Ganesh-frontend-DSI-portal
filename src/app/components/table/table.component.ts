import { Component } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { CdkTableModule } from "@angular/cdk/table";
import { BehaviorSubject, Observable } from "rxjs";

export interface UserElement {
  firstname: string;
  lastname: string;
  phonenumber: number;
  email: string;
}

const ELEMENT_DATA: UserElement[] = [
  {
    firstname: "Vivek",
    lastname: "H",
    phonenumber: 1234657652,
    email: "abc@gmail.com",
  },
  {
    firstname: "Ram",
    lastname: "P",
    phonenumber: 5644561567,
    email: "def@gmail.com",
  },
  {
    firstname: "Rio",
    lastname: "A",
    phonenumber: 6547325694,
    email: "ghi@gmail.com",
  },
  {
    firstname: "Alex",
    lastname: "m",
    phonenumber: 2357496456,
    email: "jkl@gmail.com",
  },
];

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
  standalone: true,
  imports: [CdkTableModule],
})
export class tableComponent {
  displayedColumns: string[] = [
    "firstname",
    "lastname",
    "phonenumber",
    "email",
  ];
  dataSource = new ExampleDataSource();
}

export class ExampleDataSource extends DataSource<UserElement> {
  data = new BehaviorSubject<UserElement[]>(ELEMENT_DATA);
  connect(): Observable<UserElement[]> {
    return this.data;
  }

  disconnect() {}
}
