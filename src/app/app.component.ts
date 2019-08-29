import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  rows = [];
  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  public columns = [
    { prop: 'firstName', name: 'Name' },
    { prop: 'lastName', name: 'Surname' },
    { prop: 'gender', name: 'Gender' }
  ];

  ngOnInit() {

  }

  
}
