import { Component, OnInit } from '@angular/core';
//import { AnySoaRecord } from 'dns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public src = "https://www.keaidian.com/uploads/allimg/190424/24110307_8.jpg";
  public title: string = "hi";

  public list: any[] = [
    {
      "title": "新闻1"
    },
    {
      "title": "新闻2"
    },
    {
      "title": "新闻3"
    }
  ]
  public today = new Date();
  constructor() { }
  run() {
    alert("hi");
  }
  public index = 1;

  ngOnInit(): void {
  }
  change() {
    this.title = "nihao";
  }
  public keywords: any;

}
