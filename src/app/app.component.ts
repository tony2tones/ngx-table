import { Component, OnInit, Input } from "@angular/core";
import { mockData } from "./mock/mockdata.testdata";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  rows = [];
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  public columns = [
    { prop: "firstName", name: "Name" },
    { prop: "lastName", name: "Surname" },
    { prop: "gender", name: "Gender" },
    { prop: "working", name: "Employed" }
  ];

  ngOnInit() {
    this.loadTable();
  }

  loadTable() {
    this.rows = mockData;
    setInterval(() => {
      this.loadingIndicator = false;
    }, 2000);
  }
}
