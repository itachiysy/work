import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public keywords: any;
  public history: any = [];
  add() {
    this.history.push(this.keywords);
    console.log(this.keywords);

  }
}
